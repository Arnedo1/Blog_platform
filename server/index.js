const express = require('express');
const cors = require('cors');
const pool = require('./db');
const bcrypt = require('bcrypt');
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:5174',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);

// alle blogs ophalen
app.get('/blogs', async (req, res) => {
    try {
        const results = await pool.query(
            'SELECT blogs.*, users.name, users.username, users.avatar, COUNT(DISTINCT comments.id) as comment_count, COUNT(DISTINCT likes.like_id) as like_count, array_agg(likes.user_id) as liked_by FROM blogs LEFT JOIN users ON blogs.user_id = users.id LEFT JOIN likes ON blogs.id = likes.blog_id LEFT JOIN comments ON blogs.id = comments.blog_id GROUP BY blogs.id, users.name, users.username, users.avatar'
        );
        res.json(results.rows);
    } catch (error) {
        console.log(error);
    }
});

// 1 blog ophalen met id
app.get('/blogs/:id', async (req, res) => {
    const { id } = req.params;
    const results = await pool.query('SELECT * FROM blogs WHERE id = $1', [id]);
    res.json(results.rows[0]);
});

// blog aanmaken
app.post('/blogs', async (req, res) => {
    const { title, content, user_id, read_time, tags } = req.body;
    const results = await pool.query(
        'INSERT INTO blogs (title ,content, user_id, read_time, tags) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [title, content, user_id, read_time, tags]
    );
    res.json(results.rows[0]);
});

// like aanmaken
app.post('/likes', async (req, res) => {
    const { user_id, blog_id } = req.body;
    const results = await pool.query(
        'INSERT INTO likes (user_id, blog_id) VALUES ($1,$2) RETURNING *',
        [user_id, blog_id]
    );
    res.json(results.rows[0]);
});

// like verwijderen
app.delete('/likes', async (req, res) => {
    const { user_id, blog_id } = req.body;
    await pool.query('DELETE FROM likes WHERE user_id = $1 AND blog_id = $2', [
        user_id,
        blog_id,
    ]);
    res.json({});
});

// blog editen met id
app.put('/blogs/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content, user_id, read_time, tags } = req.body;
    await pool.query(
        'UPDATE blogs SET title = $1, content = $2, user_id = $3, read_time = $4, tags = $5 WHERE id = $6',
        [title, content, user_id, read_time, tags, id]
    );
    const results = await pool.query(
        'SELECT blogs.*, users.name, users.username, users.avatar FROM blogs JOIN users ON blogs.user_id = users.id WHERE blogs.id = $1',
        [id]
    );
    res.json(results.rows[0]);
});

// blog deleten met id
app.delete('/blogs/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM likes WHERE blog_id = $1', [id]);
    await pool.query('DELETE FROM comments WHERE blog_id = $1', [id]);
    await pool.query('DELETE FROM blogs WHERE id = $1', [id]);
    res.json({ message: 'Blog deleted' });
});

// user registreren
app.post('/users', async (req, res) => {
    try {
        const { name, usersname, avatar, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const results = await pool.query(
            'INSERT INTO users (name,username,avatar,email,password) VALUES ($1,$2,$3,$4,$5) RETURNING *',
            [name, usersname, avatar, email, hashedPassword]
        );
        res.json(results.rows[0]);
    } catch (err) {
        if (err.code === '23505') {
            return res.status(400).json({ message: 'Email already exists' });
        }
        res.status(500).json({ message: 'Something went wrong' });
    }
});

// user inloggen
app.post('/users/login', async (req, res) => {
    const { email, password } = req.body;
    const results = await pool.query('SELECT * FROM users WHERE email = $1', [
        email,
    ]);
    const user = results.rows[0];

    if (!user) return res.status(404).json({ message: 'user not found' });

    const validatePassword = await bcrypt.compare(password, user.password);

    if (!validatePassword)
        return res.status(401).json({ message: 'wrong password' });
    delete user.password;
    res.json(user);
});

// get comments
app.get('/comments/:blog_id', async (req, res) => {
    const { blog_id } = req.params;
    const results = await pool.query(
        'SELECT comments.*, users.name, users.avatar FROM comments JOIN users ON comments.users_id = users.id WHERE comments.blog_id = $1 ORDER BY comments.created DESC',
        [blog_id]
    );
    res.json(results.rows);
});

// add comment
app.post('/comments', async (req, res) => {
    try {
        const { users_id, blog_id, content } = req.body;
        const results = await pool.query(
            'INSERT INTO comments (users_id, blog_id, content) VALUES ($1, $2, $3) RETURNING *',
            [users_id, blog_id, content]
        );
        res.json(results.rows[0]);
    } catch (error) {
        console.log(error);
    }
});

// delete comment
app.delete('/comments/:id', async (req, res) => {
    const { id } = req.params;
    console.log('deleting comment id:', id)
    await pool.query('DELETE FROM comments WHERE id = $1', [id]);
    res.json({ message: 'Comment deleted' });
});
// Update userdata
app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, username, email, avatar } = req.body;
        const results = await pool.query(
            'UPDATE users SET name = $1, username = $2, email = $3, avatar = $4 WHERE id = $5 RETURNING *',
            [name, username, email, avatar, id]
        );
        delete results.rows[0].password;
        res.json(results.rows[0]);
    } catch (error) {
        console.log(error);
    }
});


app.listen(3001, () => {
    console.log('Db runs on port 3001');
});
# Blog Platform

A full-stack blog platform where users can create, edit and delete blog posts, like posts and leave comments.

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Editor:** TipTap

## Features

- Register and login
- Create, edit and delete blog posts with rich text editor
- Like and unlike posts
- Add and delete comments
- Responsive design

## Installation

### Prerequisites
- Node.js
- PostgreSQL

### Backend
```bash
cd server
npm install
node index.js
```

### Frontend
```bash
npm install
npm run dev
```

### Database
Create a PostgreSQL database called `blog_platform` and run the following tables:
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    avatar VARCHAR(255) NOT NULL
);

CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    user_id INT REFERENCES users(id),
    read_time INT,
    tags TEXT[],
    created TIMESTAMP DEFAULT NOW()
);

CREATE TABLE likes (
    like_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    blog_id INT REFERENCES blogs(id),
    UNIQUE(user_id, blog_id)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    users_id INT REFERENCES users(id),
    blog_id INT REFERENCES blogs(id),
    content TEXT NOT NULL,
    created TIMESTAMP DEFAULT NOW()
);
```

## Live Demo

Coming soon

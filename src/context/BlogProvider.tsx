/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ReactNode } from 'react';
import { useContext, useEffect, useState } from 'react';
import type { BlogPost, BlogComment } from '../data/types';
import { BlogContext } from './BlogContext';
import { AuthContext } from './AuthContext';

const API = 'https://blog-platform-vdyb.onrender.com';

export const BlogProvider = ({ children }: { children: ReactNode }) => {
    const [blogPostList, setBlogPostList] = useState<BlogPost[]>([]);
    const [tags, setTags] = useState<string[]>([]);
    const [tagModal, setTagModal] = useState<boolean>(false);
    const [contentNewBlog, setContentNewBlog] = useState<string>('');
    const [titleNewBlog, setTitleNewBlog] = useState<string>('');
    const [preview, setPreview] = useState<boolean>(false);
    const [editId, setEditId] = useState<number>(0);
    const [commentContent, setCommentContent] = useState<string>('')
    const [comments, setComments] = useState<BlogComment[]>([])
    const [deleteModal, setDeleteModal] = useState<number | null>(null)
    const [filter, setFilter] = useState('last')

    const auth = useContext(AuthContext);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch(`${API}/blogs`);
                const data = await res.json();
                setBlogPostList(data);
            } catch (error) {
                auth?.setError('Er is iets misgegaan, probeer opnieuw.')
            }
        };
        fetchBlogs();
    }, []);

    const postBlog = async () => {
        try {
            const res = await fetch(`${API}/blogs`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: titleNewBlog,
                    content: contentNewBlog,
                    user_id: auth?.currentUser?.id,
                    read_time: Math.ceil(contentNewBlog.length / 200),
                    tags: tags,
                }),
            });
            const newBlog = await res.json();
            setBlogPostList([...blogPostList, newBlog]);
        } catch (error) {
            auth?.setError('Er is iets misgegaan, probeer opnieuw.')
        }
    };

    const postEdit = async (title: string, content: string, tags: string[], id: number) => {
        try {
            const res = await fetch(`${API}/blogs/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    content,
                    user_id: auth?.currentUser?.id,
                    read_time: Math.ceil(content.length / 200),
                    tags,
                }),
            });
            const editedBlog = await res.json();
            setBlogPostList(
                blogPostList.map((blog) => (blog.id === id ? editedBlog : blog))
            );
        } catch (error) {
            auth?.setError('Er is iets misgegaan, probeer opnieuw.')
        }
    };

    const deleteBlog = async (id: number) => {
        try {
            await fetch(`${API}/blogs/${id}`, {
                method: 'DELETE',
            });
            setBlogPostList(blogPostList.filter((post) => post.id !== id));
        } catch (error) {
            auth?.setError('Er is iets misgegaan, probeer opnieuw.')
        }
    };

    const handleEdit = (title: string, content: string, tags: string[], id: number) => {
        setTitleNewBlog(title);
        setContentNewBlog(content);
        setTags(tags);
        setEditId(id);
    };

    const addLike = async (user_id: number, blog_id: number) => {
        try {
            await fetch(`${API}/likes`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id, blog_id }),
            });
            const blogsRes = await fetch(`${API}/blogs`);
            const data = await blogsRes.json();
            setBlogPostList(data);
        } catch (error) {
            auth?.setError('Er is iets misgegaan, probeer opnieuw.')
        }
    };

    const removeLike = async (user_id: number, blog_id: number) => {
        try {
            await fetch(`${API}/likes`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id, blog_id }),
            });
            const blogsRes = await fetch(`${API}/blogs`);
            const data = await blogsRes.json();
            setBlogPostList(data);
        } catch (error) {
            auth?.setError('Er is iets misgegaan, probeer opnieuw.')
        }
    };

    const addComments = async (users_id: number, blog_id: number, content: string) => {
        try {
            await fetch(`${API}/comments`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ users_id, blog_id, content }),
            });
            const blogsRes = await fetch(`${API}/blogs`);
            const data = await blogsRes.json();
            setBlogPostList(data);
            const commentRes = await fetch(`${API}/comments/${blog_id}`);
            const commentData = await commentRes.json();
            setComments(commentData);
            setCommentContent('');
        } catch (error) {
            auth?.setError('Er is iets misgegaan, probeer opnieuw.');
        }
    };

    const deleteComments = async (id: number, blog_id: number) => {
        try {
            await fetch(`${API}/comments/${id}`, {
                method: 'DELETE',
            });
            const blogsRes = await fetch(`${API}/blogs`);
            const data = await blogsRes.json();
            setBlogPostList(data);
            const commentRes = await fetch(`${API}/comments/${blog_id}`);
            const commentData = await commentRes.json();
            setComments(commentData);
        } catch (error) {
            auth?.setError('Er is iets misgegaan, probeer opnieuw.')
        }
    };

    const sortedPosts = [...blogPostList].sort((a, b) => {
        if (filter === 'top') {
            return b.like_count - a.like_count;
        }
        return new Date(b.created).getTime() - new Date(a.created).getTime();
    });

    return (
        <BlogContext.Provider
            value={{
                blogPostList,
                setBlogPostList,
                tags,
                setTags,
                tagModal,
                setTagModal,
                setContentNewBlog,
                setTitleNewBlog,
                titleNewBlog,
                contentNewBlog,
                setPreview,
                preview,
                postBlog,
                deleteBlog,
                handleEdit,
                postEdit,
                editId,
                setEditId,
                addLike,
                removeLike,
                addComments,
                deleteComments,
                setCommentContent,
                commentContent,
                setComments,
                comments,
                deleteModal,
                setDeleteModal,
                filter,
                setFilter,
                sortedPosts
            }}>
            {children}
        </BlogContext.Provider>
    );
};
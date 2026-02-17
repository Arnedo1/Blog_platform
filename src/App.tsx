import BlogPostPage from './pages/BlogPostPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import { useEffect, useState } from 'react';
import { blogPosts, type BlogPost } from './data/posts';
import NewBlogForm from './components/NewBlogForm';

const App = () => {
    const [blogPostList, setBlogPostList] = useState<BlogPost[]>(() => {
        const saved = localStorage.getItem('blogpostlist');
        return saved ? JSON.parse(saved) : blogPosts;
    });

    useEffect(() => {
        localStorage.setItem('blogpostlist', JSON.stringify(blogPostList));
    }, [blogPostList]);

    return (
        <BrowserRouter basename='/blog_platform'>
            <Routes>
                <Route
                    path='/'
                    element={
                        <HomePage
                            blogPostList={blogPostList}
                            setBlogPostList={setBlogPostList}
                        />
                    }
                />
                <Route
                    path='/blogpost/:id'
                    element={
                        <BlogPostPage
                            blogPostList={blogPostList}
                            setBlogPostList={setBlogPostList}
                        />
                    }
                />
                <Route
                    path='/registreren'
                    element={<Register />}
                />
                <Route
                    path='/newblog'
                    element={
                        <NewBlogForm
                            blogPostList={blogPostList}
                            setBlogPostList={setBlogPostList}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

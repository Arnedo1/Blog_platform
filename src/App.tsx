import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import EditForm from './pages/EditForm';
import BlogPostPage from './pages/BlogPostPage';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import MenuModal from './components/MenuModal';
import LoginModal from './components/LoginModal';
import Register from './pages/Register';
import UsersModal from './components/UsersModal';
import NewBlogForm from './pages/NewBlogForm';
import { BlogContext } from './context/BlogContext';
import PreviewModal from './components/PreviewModal';
import ErrorModal from './components/ErrorModal';
import Settings from './pages/Settings';

const App = () => {
    const auth = useContext(AuthContext);
    const blog = useContext(BlogContext);
    if (!auth || !blog) return null;
    return (
        <BrowserRouter basename='/Blog_platform'>
            {auth.menuModal && (
                <div
                    onClick={() => auth.setMenuModal(false)}
                    className='fixed inset-0 bg-black/20 h-screen z-900'>
                    <div className='fixed top-16 z-200'>
                        <MenuModal />
                    </div>
                </div>
            )}
            {auth.loginModal && (
                <div
                    onClick={() => auth.setLoginModal(false)}
                    className='fixed inset-0 bg-black/20 z-900'>
                    <div className='fixed top-16 z-200'>
                        <LoginModal />
                    </div>
                </div>
            )}
            {auth.userModal && (
                <div
                    onClick={() => auth.setUserModal(false)}
                    className='fixed inset-0 bg-black/20 z-900'>
                    <div className='fixed top-16 z-200'>
                        <UsersModal />
                    </div>
                </div>
            )}

            {blog.preview && (
                <div className='h-screen w-full z-200'>
                    <PreviewModal />
                </div>
            )}
            {auth.error && <ErrorModal />}
            <div className='max-w-300 h-full mx-auto bg-white'>
            <Routes>
                <Route
                    path='/'
                    element={<HomePage />}
                />
                <Route
                    path='/blogpost/:id'
                    element={<BlogPostPage />}
                />
                <Route
                    path='/register'
                    element={<Register />}
                />
                <Route
                    path='/newblog'
                    element={<NewBlogForm />}
                />
                <Route
                    path='/edit_blog'
                    element={<EditForm />}
                />
                <Route
                    path='/instellingen'
                    element={<Settings />}
                />
               
            </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;

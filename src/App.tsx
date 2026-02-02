import BlogPostPage from './pages/BlogPostPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import { useEffect, useState } from 'react';
import type { User, UserArrayData} from './data/posts'
import NewBlogForm from './components/NewBlogForm';

const App = () => {
    const [userModal, setUserModal] = useState<boolean>(false);
    const [menuModal, setMenuModal] = useState<boolean>(false);
    const [loginModal, setLoginModal] = useState<boolean>(false);
    const [userArray, setUserArray] = useState<UserArrayData[]>(()=> {
      const saved = localStorage.getItem('userArray')
      return saved ? JSON.parse(saved) : []})
    const [currentUser, setCurrentUser] = useState<User | null>(() => {
        const saved = localStorage.getItem('currentUser');
        return saved ? JSON.parse(saved) : null;
    });

    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }, [currentUser]);
    useEffect(() => {
      localStorage.setItem('userArray', JSON.stringify(userArray));
  }, [userArray]);

    return (
        <BrowserRouter basename='/Blog_platform'>
            <Routes>
                <Route
                    path='/'
                    element={
                        <HomePage
                            setCurrentUser={setCurrentUser}
                            currentUser={currentUser}
                            userModal={userModal}
                            setUserModal={setUserModal}
                            menuModal={menuModal}
                            setMenuModal={setMenuModal}
                            loginModal={loginModal}
                            setLoginModal={setLoginModal}
                            userArray={userArray}
                        />
                    }
                />
                <Route
                    path='/blogpost/:id'
                    element={
                        <BlogPostPage
                            setCurrentUser={setCurrentUser}
                            currentUser={currentUser}
                            userModal={userModal}
                            setUserModal={setUserModal}
                            menuModal={menuModal}
                            setMenuModal={setMenuModal}
                            userArray={userArray}
                        />
                    }
                />
                <Route
                    path='/registreren'
                    element={
                        <Register
                            setCurrentUser={setCurrentUser}
                            currentUser={currentUser}
                            userModal={userModal}
                            setUserModal={setUserModal}
                            userArray={userArray}
                            setUserArray={setUserArray}
                            menuModal={menuModal}
                            setMenuModal={setMenuModal}
                        />
                    }
                />
                <Route path='/newblog' element={
                  <NewBlogForm/>
                }/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;

import BlogPostPage from './pages/BlogPostPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import { useEffect, useState } from 'react';
import type { User, UserArrayData} from './data/posts'

const App = () => {
    const [userModal, setUserModal] = useState<boolean>(false);
    const [userArray, setUserArray] = useState<UserArrayData[]>([])
    const [currentUser, setCurrentUser] = useState<User | null>(() => {
        const saved = localStorage.getItem('currentUser');
        return saved ? JSON.parse(saved) : null;
    });

    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }, [currentUser]);

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
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

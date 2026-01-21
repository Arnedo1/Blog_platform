import BlogPostPage from './pages/BlogPostPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './components/Register';

const App = () => {

    return (
      <BrowserRouter basename="/Blog_platform">
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
                    path='/registreren'
                    element={<Register />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

import BlogPostPage from './pages/BlogPostPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

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
            </Routes>
        </BrowserRouter>
    );
};

export default App;

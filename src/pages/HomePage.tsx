import { useState } from 'react';
import BlogList from '../components/BlogList';
import Header from '../components/Header';

const HomePage = () => {
    const [topFilter, setTopFilter] = useState('')

    return (
        <div>
            <div>
                <Header />
                <BlogList topFilter={topFilter} setTopFilter={setTopFilter}/>
            </div>
        </div>
    );
};

export default HomePage;

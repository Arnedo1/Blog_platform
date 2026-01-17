import TopFilter from './TopFilter';
import { blogPosts } from '../data/posts';
import BlogCard from './BlogCard';

const BlogList = () => {
    return (
        <div className='bg-gray-100'>
            <TopFilter />
            {blogPosts.map((blog)=> <BlogCard key={blog.id} blog={blog}/>)}
        </div>
    );
};

export default BlogList;

import TopFilter from './TopFilter';
import { blogPosts } from '../data/posts';
import BlogCard from './BlogCard';

interface BlogListProps {
    setTopFilter: (value: string) => void;
    topFilter: string;
    userModal: boolean;
    setUserModal: (value: boolean) => void;
}

const BlogList = (props: BlogListProps) => {
    return (
        <div className='bg-gray-100'>
            <TopFilter
                setTopFilter={props.setTopFilter}
                topFilter={props.topFilter}
            />

            {blogPosts.map((blog) => (
                <BlogCard
                    key={blog.id}
                    blog={blog}
                />
            ))}
        </div>
    );
};

export default BlogList;

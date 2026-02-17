import TopFilter from './TopFilter';
import BlogCard from './BlogCard';
import type { BlogPost } from '../data/posts';

interface BlogListProps {
    setTopFilter: (value: string) => void;
    topFilter: string;
    blogPostList:BlogPost[]
    setBlogPostList:(value:BlogPost[])=>void
}

const BlogList = ({setTopFilter, topFilter, blogPostList}: BlogListProps) => {
    const sortedPosts = [...blogPostList].sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        console.log('dateA:', a.date, dateA);
        console.log('dateB:', b.date, dateB);
        return dateB - dateA;  
    });


    return (
        <div className='bg-gray-100'>
            <TopFilter
                setTopFilter={setTopFilter}
                topFilter={topFilter}
            />

            {sortedPosts.map((blog) => (
                <BlogCard
                    key={blog.id}
                    blog={blog}
                />
            ))}
        </div>
    );
};

export default BlogList;

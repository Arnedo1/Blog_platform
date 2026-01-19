import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/posts';
import { FcLike } from 'react-icons/fc';
import { LuMessageCircle } from 'react-icons/lu';
import Header from '../components/Header';
import Comments from '../components/CommentList';

const BlogPostPage = () => {
    const { id } = useParams();
    const blog = blogPosts.find((post) => post.id === Number(id));

    if (!blog) {
        return <div>Blog niet gevonden!</div>;
    }

    return (
        <div>
            <Header />

            <div className='p-4'>
                <div className='flex gap-4'>
                    <div>
                        <img
                            className='size-10 rounded-full'
                            src={blog.author.avatar}
                            alt='avatar'
                        />
                    </div>
                    <div>
                        <div>{blog.author.name}</div>
                        <div className='text-[12px] flex gap-1'>
                        <p>Posted</p>{blog.date}</div>
                    </div>
                </div>

                <div className='font-bold text-2xl my-4'>{blog.title}</div>

                <div className='flex gap-4 mb-4 text-[14px] text-gray-500'>
                    {blog.tags.map((tag) => (
                        <p key={tag}>#{tag}</p>
                    ))}
                </div>

                <div className='flex gap-4'>
                    <div className='flex gap-1 cursor-pointer'>
                        <FcLike className='size-5' />
                        <div className='text-[14px]'>{blog.likes}</div>
                    </div>
                    <div className='flex gap-1'>
                        <LuMessageCircle className='mt-0.5' />
                        <div className='text-[14px]'>
                            {blog.comments.length}
                        </div>
                    </div>
                </div>

                <div className='mt-6'>
                    <p>{blog.content}</p>
                </div>
            </div>
            <Comments blog={blog}/>
        </div>
    );
};

export default BlogPostPage;

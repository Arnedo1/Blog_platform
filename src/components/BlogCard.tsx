import type { BlogPost } from '../data/posts';
import { FcLike } from 'react-icons/fc';
import { LuMessageCircle } from 'react-icons/lu';
import { FaRegBookmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const BlogCard = ({ blog }: { blog: BlogPost }) => {
    return (
        <Link to={`/blogpost/${blog.id}`}>
        <div className='shadow flex flex-col shadow-black/20 bg-white mb-3 mx-1 py-6 px-4'>
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
                    <div className='text-[12px]'>{blog.author.date}</div>
                </div>
            </div>
            
            <div className='font-bold hover:text-purple-900 cursor-pointer text-lg my-2 '>{blog.title}</div>
          
            <div className='flex gap-4 mb-4 text-[14px] text-gray-500'>
                {blog.tags.map((tag) => (
                    <p key={blog.id}>#{tag}</p>
                ))}
            </div>
            <div className='flex justify-between gap-4'>
                <div className='flex gap-4'>
                <div className='flex gap-1 cursor-pointer'>
                    <div>
                        <FcLike className='size-5' />
                    </div>
                    <div className='text-[14px]'>{blog.likes}</div>
                </div>
                <div className='flex gap-1'>
                    <div>
                        <LuMessageCircle className='mt-0.5' />
                    </div>
                    <div className='text-[14px]'>{blog.comments.length}</div>
                </div>
                </div>
                <div className='flex gap-4'>
                <div className='flex gap-1 text-[14px] text-gray-600'>
                    {blog.readTime} <p>min lezen</p>
                </div>
                <div><FaRegBookmark className='mt-1'/>
                </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default BlogCard;

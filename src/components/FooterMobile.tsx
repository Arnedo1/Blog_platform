import { CiHeart } from 'react-icons/ci';
import { AiFillHeart } from 'react-icons/ai';
import { LuMessageCircle } from 'react-icons/lu';
import { FaRegBookmark } from 'react-icons/fa6';
import { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { AuthContext } from '../context/AuthContext';
import type { BlogPost } from '../data/types';

const FooterMobile = ({ post }: { post: BlogPost }) => {
    const blog = useContext(BlogContext);
    const auth = useContext(AuthContext);
    if (!blog || !auth) return null;
    if (!auth.currentUser) return null;

    const isLiked = post.liked_by?.some(id => Number(id) === auth.currentUser?.id)

    return (
        <div className='flex justify-evenly items-center h-15 bg-white fixed bottom-0 w-full shadow-[0_-4px_2px_-1px_rgba(0,0,0,0.1)]'>
            <div className='flex'>
                {isLiked ? (
                    <AiFillHeart
                        className='size-8 cursor-pointer text-red-700'
                        onClick={() => blog.removeLike(auth.currentUser!.id, post.id)}
                    />
                ) : (
                    <CiHeart
                        className='size-8 cursor-pointer'
                        onClick={() => blog.addLike(auth.currentUser!.id, post.id)}
                    />
                )}
                <div className='mt-1 ml-1'>{post.like_count}</div>
            </div>
            <div className='flex'>
                <div><LuMessageCircle className='mt-0.5 text-gray-600 size-6.5' /></div>
                <div className='mt-1 ml-1'>{post.comment_count}</div>
            </div>
            <div className='flex'>
                <div><FaRegBookmark className='mt-1 text-gray-600 size-5.5' /></div>
                <div className='mt-1 ml-1'>12</div>
            </div>
        </div>
    );
};

export default FooterMobile;
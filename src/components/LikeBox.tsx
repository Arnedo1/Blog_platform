import { CiHeart } from 'react-icons/ci';
import { AiFillHeart } from 'react-icons/ai';
import { LuMessageCircle } from 'react-icons/lu';
import { FaRegBookmark } from 'react-icons/fa6';
import { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { AuthContext } from '../context/AuthContext';
import type { BlogPost } from '../data/types';

const LikeBox = ({ post }: { post: BlogPost }) => {
    const blog = useContext(BlogContext);
    const auth = useContext(AuthContext);
    if (!blog || !auth) return null;
    if (!auth.currentUser) return null;

    const isLiked = post.liked_by?.some(id => Number(id) === auth.currentUser?.id)

    return (
        <div className='flex flex-col pt-28 gap-10 items-center w-15 border-r border-gray-200 h-screen shadow-[0_-4px_2px_-1px_rgba(0,0,0,0.1)]'>
            <div>
                {isLiked ? (
                    <AiFillHeart
                        className='size-7 cursor-pointer text-red-700'
                        onClick={() => blog.removeLike(auth.currentUser!.id, post.id)}
                    />
                ) : (
                    <CiHeart
                        className='size-7 cursor-pointer'
                        onClick={() => blog.addLike(auth.currentUser!.id, post.id)}
                    />
                )}
                <div className='ml-2.5'>{post.like_count}</div>
            </div>
            <div>
                <div><LuMessageCircle className='mt-0.5 text-gray-600 size-6' /></div>
                <div className='ml-2.5'>{post.comment_count}</div>
            </div>
            <div>
                <div><FaRegBookmark className='mt-1 text-gray-600 size-5' /></div>
                <div className='ml-0.5'>12</div>
            </div>
        </div>
    );
};

export default LikeBox;
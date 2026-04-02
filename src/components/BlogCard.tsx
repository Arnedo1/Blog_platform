import { CiHeart } from 'react-icons/ci';
import { LuMessageCircle } from 'react-icons/lu';
import { FaRegBookmark } from 'react-icons/fa6';
import type { BlogPost } from '../data/types';
import { Link } from 'react-router';
import { BlogContext } from '../context/BlogContext';
import { useContext } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { AuthContext } from '../context/AuthContext';

const BlogCard = ({ post }: { post: BlogPost }) => {
    const blog = useContext(BlogContext);
    const auth = useContext(AuthContext)
    if(!blog || !auth)return null
    const isLiked = post.liked_by?.some(id => Number(id) === auth.currentUser?.id)

    return (
        
            <div className='shadow flex flex-col shadow-black/20 bg-white mb-3 mx-1 py-4 px-4'>
                <div className='flex gap-4'>
                    <div>
                        <img
                            className='size-8 rounded-full'
                            src={post.avatar}
                        />
                    </div>
                    <div>
                        <div>{post.name}</div>
                        <div className='text-[10px]'>
                            {new Date(post.created).toLocaleDateString()}
                        </div>
                    </div>
                </div>
                <Link to={`/blogpost/${post.id}`}>
                <div className='font-bold hover:text-purple-900 cursor-pointer text-l my-1'>
                    {post.title}
                </div>

                </Link>
                <div className='flex gap-4 mb-2 text-[14px] text-gray-500'></div>
                <div className='flex justify-between gap-4'>
                    <div className='flex gap-4'>
                        <div className='flex gap-1 cursor-pointer'>
                            <div>
                                {
                                    isLiked ? (
                                        <AiFillHeart
                                        className='size-5 cursor-pointer  text-red-700'
                                        onClick={() => {
                                            if(!auth.currentUser) return
                                            blog.removeLike(auth.currentUser.id, post.id)
                                        }}
                                        />
                                    ) : (
                                        <CiHeart
                                        className='size-5 cursor-pointer'
                                        onClick={() => {
                                            if(!auth.currentUser) return
                                            blog.addLike(auth.currentUser.id, post.id)
                                        }}
                                        />
                                    ) 
                                }
                                
                                    
                                    
                            
                            </div>
                            <div className='text-[14px]'>{post.like_count}</div>
                        </div>
                        <div className='flex gap-1'>
                            <div>
                                <LuMessageCircle className='mt-0.5' />
                            </div>
                            <div className='text-[14px]'>
                                {post.comment_count}
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='flex gap-1 text-[14px] text-gray-600'>
                            {Math.ceil(post.content.length / 200)}
                            <p>min lezen</p>
                        </div>
                        <div>
                            <FaRegBookmark className='mt-1' />
                        </div>
                    </div>
                </div>
            </div>
       
    );
};

export default BlogCard;

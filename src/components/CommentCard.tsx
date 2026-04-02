import { useContext } from 'react';
import type { BlogComment } from '../data/types';
import { MdOutlineDelete } from "react-icons/md";
import { BlogContext } from '../context/BlogContext';
import { AuthContext } from '../context/AuthContext';
import DeleteModal from './DeleteModal';

const CommentCard = ({ comment }: { comment: BlogComment }) => {
    const blog = useContext(BlogContext);
    const auth = useContext(AuthContext);
    if (!blog || !auth) return null;
    return (
        <div className='p-4 mt-3 flex gap-2'>
            <div>
                <img
                    src={comment.avatar}
                    alt='Logo'
                    className='w-10 rounded-full'
                />
            </div>
            <div className='p-3 border w-full border-gray-100'>
                <div className='flex text-sm text-gray-600 justify-between items-center'>
                    <div>{comment.name}</div>
                    <div className='flex'>
                        <div className='mr-5'>
                            {new Date(comment.created).toLocaleDateString()}
                        </div>
                        {comment.users_id === auth.currentUser?.id && (
                            <MdOutlineDelete
                                className='size-5 cursor-pointer'
                                onClick={() => blog.setDeleteModal(comment.id)}
                            />
                        )}
                        {blog.deleteModal === comment.id && (
                            <div
                                onClick={() => blog.setDeleteModal(null)}
                                className='fixed inset-0 bg-black/20 z-900'>
                                <div className='fixed top-15 z-200'>
                                    <DeleteModal id={comment.id} blog_id={comment.blog_id} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='mt-3 mb-2'>{comment.content}</div>
                <div className='flex items-center gap-5'></div>
            </div>
        </div>
    );
};

export default CommentCard;
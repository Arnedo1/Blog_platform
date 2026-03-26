import { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { AuthContext } from '../context/AuthContext';
import type { BlogPost } from '../data/types';


const CommentList = ({post}:{post:BlogPost}) => {
    const blog = useContext(BlogContext);
    const auth = useContext(AuthContext);
    if (!blog || !auth) return null;
    if (!auth.currentUser) return null
    return (
        <div className='pb-5 border-b border-gray-200'>
            <div className='flex justify-between  pt-4 items-center px-4'>
                <div className='text-xl font-semibold'>Reacties</div>

            </div>
            <div className='flex px-4 my-4 gap-2 items-start'>
                <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${auth.currentUser.avatar}`}
                    alt='Logo'
                    className='w-10 rounded-full'
                />
                <textarea
                    onChange={(e) => blog.setCommentContent(e.target.value)}
                    placeholder='Schijf hier je reactie'
                    className='border p-2 outline-none h-20 w-full border-gray-300 resize-y rounded'
                    value={blog.commentContent}
                    onKeyDown={(e)=> e.key === 'Enter' && blog.addComments(auth.currentUser!.id, post.id, blog.commentContent)}
                />
            </div>
            <button 
            onClick={()=>blog.addComments(auth.currentUser!.id, post.id, blog.commentContent)}
            className="bg-gray-800 ml-17 hover:bg-gray-700 text-white rounded-lg py-2 px-10 text-sm transition-colors">Verstuur</button>
        </div>
    );
};

export default CommentList;

import type { Comment } from '../data/posts';
import { RxAvatar } from 'react-icons/rx';
import { CiHeart } from 'react-icons/ci';
import { LuMessageCircle } from 'react-icons/lu';

const CommentCard = ({ comment }: { comment: Comment }) => {
    return (
        <div className='p-4 flex gap-2 '>
            <div>
                {comment.avatar ? (
                    <img
                        src={comment.avatar}
                        alt='avatar'
                        className='size-8 rounded-full'
                    />
                ) : (
                    <RxAvatar className='size-8'/>
                )}
            </div>
            <div className='p-3 border w-full border-gray-100'>
                <div className='flex text-sm text-gray-600 justify-between items-center'>
                    <div className=''>{comment.author}</div>
                    <div className='mr-5'>{comment.date}</div>
                </div>
                <div className='mt-3 mb-7'>{comment.content}</div>
                <div className='flex items-center gap-5'>
                    <div>
                        <CiHeart className='size-6' />
                    </div>
                    <div>
                        <LuMessageCircle className='mt-0.5 size-4.5' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentCard;

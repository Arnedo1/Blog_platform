import { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { AuthContext } from '../context/AuthContext';
import { CiHeart } from 'react-icons/ci';
import { LuMessageCircle } from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';

const PreviewModal = () => {
    const blog = useContext(BlogContext);
    const auth = useContext(AuthContext);
    if (!blog || !auth) return null;
    if (!auth.currentUser) return null;
    return (
        <div className='bg-white max-w-200 mx-auto w-full'>
            <div className='flex bg-gray-100 justify-end gap-4 items-center h-13'>
                <div
                    onClick={() => blog.setPreview(true)}
                    className={
                        blog.preview === true
                            ? 'text-gray-600 font-bold cursor-pointer'
                            : 'text-gray-600 font-normal cursor-pointer'
                    }>
                    Preview
                </div>

                <div>
                    <IoMdClose
                        onClick={() => blog.setPreview(false)}
                        className='size-5 mr-4'
                    />
                </div>
            </div>
            <div className='m-4'>
                <div className='flex gap-4'>
                    <div>
                        <img
                            className='size-10 rounded-full'
                            src={auth?.currentUser?.avatar}
                            alt='avatar'
                        />
                    </div>
                    <div>
                        <div>{auth.currentUser.name}</div>
                        <div className='text-[12px] flex gap-1'>
                            <p>
                                Posted
                                <span className='ml-1'>
                                    {new Date().toLocaleDateString()}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='font-bold text-2xl my-4'>
                    {blog.titleNewBlog}
                </div>
                <div className='flex gap-4 mb-4 text-[14px] text-gray-500'>
                    {blog.tags.map((tag) => (
                        <p key={tag}>#{tag}</p>
                    ))}
                </div>
                <div className='flex gap-4 mb-4 h-10 border-b border-gray-200'>
                    <div className='flex gap-1 cursor-pointer'>
                        <CiHeart className='size-5 cursor-pointer' />
                        <div className='text-[14px]'>0</div>
                    </div>
                    <div className='flex gap-1'>
                        <LuMessageCircle className='mt-0.5' />
                        <div className='text-[14px]'>0</div>
                    </div>
                </div>
                <div
                    dangerouslySetInnerHTML={{
                        __html: blog.contentNewBlog ?? '',
                    }}
                    className='
                    p-4 overflow-y-auto
                    [&_p]:mt-1
                    [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-4
                    [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mb-3
                    [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mb-2
                    [&_ul]:list-disc [&_ul]:pl-5
                    [&_strong]:font-bold
                    [&_em]:italic
                    
                '
                />
            </div>
        </div>
    );
};

export default PreviewModal;

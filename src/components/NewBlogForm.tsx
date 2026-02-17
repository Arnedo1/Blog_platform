import { useContext, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router';
import TagArrayModal from './TagArrayModal';
import type { BlogPost } from '../data/posts';
import Tiptap from './Tiptap';
import { AuthContext } from '../context/AuthContext';

interface NewBlogFormProps {
    blogPostList: BlogPost[];
    setBlogPostList: (value: BlogPost[]) => void;
}

const NewBlogForm = ({ setBlogPostList, blogPostList }: NewBlogFormProps) => {
    const auth = useContext(AuthContext)
    const [blogContent, setBlogContent] = useState<string>('');
    const [blogTitle, setBlogTitle] = useState<string>('');
    const [blogTags, setBlogTags] = useState<string[]>([]);
    const [tagModal, setTagModal] = useState<boolean>(false);
    const [newBlogState, setNewBlogState] = useState<string>('edit');
    const navigate = useNavigate();

    const handleSubmit = () => {
        const newBlog: BlogPost = {
            id: Date.now(),
            title: blogTitle,
            content: blogContent,
            excerpt: blogContent.substring(0, 100),
            coverImage: 'https://via.placeholder.com/800x400',
            author: {
                id: Date.now(),
                name: auth?.currentUser?.name || 'Anonymous',
                avatar: auth?.currentUser?.avatar || '',
                bio: '',
                date: new Date().toISOString().split('T')[0],
            },
            tags: blogTags,
            comments: [],
            likes: 0,
            date: new Date().toISOString().split('T')[0],
            readTime: Math.ceil(blogContent.length / 200),
            categories: [],
        };
        if (!blogTitle.trim() || !blogContent.trim()) {
            alert('Please fill in title and content');
            return;
        }

        const usersPosts = [...(auth?.currentUser?.posts || []), newBlog];
        if (auth?.currentUser) {
            setBlogPostList([...blogPostList, newBlog]);
            console.log(newBlog);
            console.log(blogPostList);
            auth?.setCurrentUser({ ...auth?.currentUser, posts: usersPosts });
            setBlogTitle('');
            setBlogContent('');
            setBlogTags([]);
            navigate(-1);
            auth?.setUserModal(false);
        }
    };

    return (
        <div
            onClick={() => setTagModal(false)}
            className=''>
            <div className='flex bg-gray-100 justify-end gap-4 items-center h-15'>
                <div
                    onClick={() => setNewBlogState('edit')}
                    className={
                        newBlogState === 'edit'
                            ? 'text-gray-600  cursor-pointer font-bold'
                            : 'text-gray-600 cursor-pointer'
                    }>
                    Edit
                </div>
                <div
                    onClick={() => setNewBlogState('preview')}
                    className={
                        newBlogState === 'preview'
                            ? 'text-gray-600  cursor-pointer font-bold'
                            : 'text-gray-600 cursor-pointer'
                    }>
                    Preview
                </div>
                <div>
                    <IoMdClose
                        onClick={() => navigate(-1)}
                        className='size-6 mr-4'
                    />
                </div>
            </div>
            <div>
                {newBlogState === 'preview' && blogTitle && blogContent && (
                    <div className='p-4 '>
                        <div className='flex gap-4'>
                            <div>
                                <img
                                    className='size-10 rounded-full'
                                    src={auth?.currentUser?.avatar}
                                    alt='avatar'
                                />
                            </div>
                            <div>
                                <div>{auth?.currentUser?.name}</div>
                            </div>
                        </div>
                        <div className='font-bold text-2xl my-4'>
                            {blogTitle}
                        </div>
                        <div className='flex gap-4 text-[14px] text-gray-500'>
                            {blogTags.map((tag) => (
                                <p key={tag}>#{tag}</p>
                            ))}
                        </div>
                        <div className='flex gap-4 mb-4 h-5 border-b border-gray-200'></div>
                        <div
                            dangerouslySetInnerHTML={{ __html: blogContent }}
                            className='
        [&_p]:mt-1
        [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-4
        [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mb-3
        [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mb-2
        [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-
        [&_li]:
        [&_strong]:font-bold
        [&_em]:italic
    '
                        />
                    </div>
                )}
            </div>
            {newBlogState === 'edit' && (
                <div>
                    <div>
                        <input
                            className='text-3xl text-gray-600 m-4 font-bold placeholder:text-gray-600 focus:outline-none'
                            placeholder='New post title here...'
                            onChange={(e) => setBlogTitle(e.target.value)}
                            value={blogTitle}
                            type='text'
                        />
                    </div>

                    <div className='px-4'>
                        <div>
                            <input
                                className='py-4 focus:outline-none w-full'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setTagModal(true);
                                }}
                                value={blogTags.join('    ')}
                                placeholder='Add up to 3 tags...'
                                type='text'
                                readOnly
                            />
                        </div>
                        <div>
                            {tagModal && (
                                <TagArrayModal
                                    setBlogTags={setBlogTags}
                                    blogTags={blogTags}
                                />
                            )}
                        </div>
                    </div>

                    <div className='card'>
                        <Tiptap
                            value={blogContent}
                            onChange={setBlogContent}
                        />
                    </div>
                </div>
            )}
            <div className='flex fixed bottom-0 w-full bg-gray-100 pl-6 items-center h-15'>
                <button
                    onClick={() => handleSubmit()}
                    className='text-white bg-blue-700 shadow-2xl shadow-black-20 rounded-md px-6 py-2'>
                    Publish
                </button>
            </div>
        </div>
    );
};

export default NewBlogForm;

import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router';
import TagArrayModal from './TagArrayModal';
import type { User, BlogPost } from '../data/posts';
import Tiptap from './Tiptap';

interface NewBlogFormProps {
    setCurrentUser: (value: User | null) => void;
    currentUser: User | null;
}

const NewBlogForm = ({ setCurrentUser, currentUser }: NewBlogFormProps) => {
    const [blogContent, setBlogContent] = useState<string>('');
    const [blogTitle, setBlogTitle] = useState<string>('');
    const [blogTags, setBlogTags] = useState<string[]>([]);
    const [tagModal, setTagModal] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!blogTitle.trim() || !blogContent.trim()) {
            alert('Please fill in title and content');
            return;
        }

        const newBlog: BlogPost = {
            id: Date.now(),
            title: blogTitle,
            content: blogContent,
            excerpt: blogContent.substring(0, 100),
            coverImage: 'https://via.placeholder.com/800x400',
            author: {
                id: Date.now(),
                name: currentUser?.name || 'Anonymous',
                avatar: currentUser?.avatar || '',
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

        const usersPosts = [...(currentUser?.posts || []), newBlog];
        if (currentUser){
        setCurrentUser({ ...currentUser, posts: usersPosts });
        setBlogTitle('');
        setBlogContent('');
        setBlogTags([]);
        navigate(-1);
        }
    };

    return (
        <div onClick={() => setTagModal(false)} className=''>
            <div className='flex bg-gray-100 justify-end gap-4 items-center h-15'>
                <div className='text-gray-600'>Edit</div>
                <div className='text-gray-600'>Preview</div>
                <div>
                    <IoMdClose
                        onClick={() => navigate(-1)}
                        className='size-6 mr-4'
                    />
                </div>
            </div>

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
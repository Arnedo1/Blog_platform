import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router';
import TagArrayModal from './TagArrayModal';
import { IoMdLink } from 'react-icons/io';
import { FaImage } from 'react-icons/fa';
import { LuItalic } from "react-icons/lu";




const NewBlogForm = () => {
    const [blogTitle, setBlogTitle] = useState<string>('');
    const [blogTags, setBlogTags] = useState('');
    const [tagModal, setTagModal] = useState(false);
    const navigate = useNavigate();
    return (
        <div
            onClick={() => setTagModal(false)}
            className=''>
            <div className='flex bg-gray-100 justify-end gap-4 items-center h-15'>
                <div className='text-gray-600'>Edit</div>
                <div className='text-gray-600'>Preview</div>
                <div>
                    <IoMdClose
                        onClick={() => navigate(-1)}
                        className='size-6  mr-4'
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
                        className=' py-4 focus:outline-none'
                        onClick={(e) => {
                            e.stopPropagation();
                            setTagModal(true);
                        }}
                        onChange={(e) => setBlogTags(e.target.value)}
                        value={blogTags}
                        placeholder='Add up  to 4 tags...'
                        type='text'
                    />
                </div>
                <div>{tagModal && <TagArrayModal />}</div>
            </div>
            <div className='flex  gap-6 text-2xl text-gray-600 px-4 bg-gray-100 h-14 items-center'>
                <div className='font-bold'>B</div>
                <div className='italic'><LuItalic className='size-6'/>

                </div>
                <select className='focus:outline-none'>
                    <option value='small'>small</option>
                    <option value='medium'>medium</option>
                    <option value='large'>large</option>
                </select>
                <div>
                    <IoMdLink className='size-8 mt-1' />
                </div>
                <div>
                    <FaImage className='mt-1 ml-2' />
                </div>
            </div>
            <div>
            <div>
                <textarea
                    className='w-full p-4 text-[18px]'
                    placeholder='Write your post content here...'></textarea>
            </div>
            <div className='flex fixed bottom-0 w-full  bg-gray-100  pl-6 items-center h-15'>
                <button className='text-white bg-blue-700 shadow-2xl shadow-black-20 rounded-md px-6 py-2'>Publish</button>
                
            </div>
            </div>
            
        </div>
    );
};

export default NewBlogForm;

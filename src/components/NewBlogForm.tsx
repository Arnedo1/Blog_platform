import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router';
import TagArrayModal from './TagArrayModal';

const NewBlogForm = () => {
    const [blogTitle, setBlogTitle] = useState<string>('');
    const [blogTags, setBlogTags] = useState('')
    const [tagModal, setTagModal] = useState(false)
    const navigate = useNavigate();
    return (
        <div 
        onClick={()=>setTagModal(false)}
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
            <div 
            
            className='px-4'>
                <div><input 
                className=' py-4 focus:outline-none'
                onClick={(e)=>{
                    e.stopPropagation()
                    setTagModal(true)}}
                onChange={(e)=>setBlogTags(e.target.value)}
                value={blogTags}
                placeholder='Add up  to 4 tags...'
                type="text" /></div>
                <div>{tagModal && <TagArrayModal/>}</div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default NewBlogForm;

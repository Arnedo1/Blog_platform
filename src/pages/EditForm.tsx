import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router';
import TagArrayModal from '../components/TagArrayModal';
import { BlogContext } from '../context/BlogContext';
import { useContext, useState } from 'react';
import Tiptap from '../components/Tiptap';
import { AuthContext } from '../context/AuthContext';

interface ErrorData{
    title?:string
    content?:string
    tags?:string
}

const NewBlogForm = () => {
    const nav = useNavigate();
    const blog = useContext(BlogContext);
    const auth = useContext(AuthContext)
    const [error, setError] = useState<ErrorData>({})
    if (!blog)return null
    if(!auth)return null



const validate = () => {
    const newError : ErrorData = {}
    if(!blog.titleNewBlog.trim()){newError.title = 'You need to write a title'}
    if(blog.tags.length === 0){newError.tags = 'You need to choose at least 1 tag'}
    if(!blog.contentNewBlog.trim()){newError.content = 'You need to write a text'}
    setError(newError)
    return Object.keys(newError).length === 0
    }
    const handlePreview = () => {
        if (validate()) {
            blog.setPreview(true)
        }
    }
    const PublishEdit = () => {
        if (validate()) {
            blog.postEdit(blog.titleNewBlog, blog.contentNewBlog, blog.tags, blog.editId)
            blog.setTitleNewBlog('')
            blog.setContentNewBlog('')
            blog.setTags([])
            nav('/')
        }
    }

    return (
        <div className=''>
            {blog.tagModal && (
                <div
                    onClick={() => blog.setTagModal(false)}
                    className='absolute bg-amber-100/0 h-screen w-full z-200'></div>
            )}
            <div className='flex bg-gray-100 justify-end gap-4 items-center h-15'>
                <div 
                onClick={()=>handlePreview()}
                className={blog.preview === true ? 'text-gray-600 font-bold cursor-pointer' : 'text-gray-600 font-normal cursor-pointer'}>Preview</div>
                <div>
                    <IoMdClose
                        onClick={() => nav(-1)}
                        className='size-6 mr-4'
                    />
                </div>
            </div>
            <div>
                <div>

                    <input
                        className='text-3xl text-gray-600 m-4 font-bold placeholder:text-gray-600 focus:outline-none'
                        placeholder='New post title here...'
                        type='text'
                        onChange={(e)=>blog.setTitleNewBlog(e.target.value)}
                        value={blog.titleNewBlog}

                    />
                    <div>{error.title && <p className='text-red-500 ml-4 text-sm mt-1'>{error.title}</p>}</div>
                </div>
                <div className='px-4'>
                    <div>
                        <input
                            onClick={() => blog.setTagModal(!blog.tagModal)}
                            className='py-4 focus:outline-none w-full'
                            placeholder='Add up to 3 tags...'
                            type='text'
                            readOnly
                        />
                        <div>{error.tags && <p className=' text-red-500 text-sm mt-1'>{error.tags}</p>}</div>
                    </div>
                </div>
                <div className='flex gap-2 flex-wrap mb-2'>
                    {blog.tags.map((tag) => (
                        <span
                            key={tag}
                            className='flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-md text-sm'>
                            #{tag}
                            <IoMdClose
                                onClick={() =>
                                    blog.setTags(
                                        blog.tags.filter((t) => t !== tag)
                                    )
                                }
                                className='cursor-pointer'
                            />
                        </span>
                    ))}
                </div>

                {blog.tagModal && <TagArrayModal />}
                <Tiptap
                    value={blog.contentNewBlog}
                    onChange={(content) => blog.setContentNewBlog(content)}
                    error={error}
                />
                
            </div>
            <div className='flex fixed bottom-0 w-full bg-gray-100 pl-6 items-center h-15'>
                <button 
                onClick={()=>PublishEdit()}
                className='text-white bg-blue-700 shadow-2xl shadow-black-20 rounded-md px-6 py-2'>
                    Publish
                </button>
            </div>
        </div>
    );
};

export default NewBlogForm;

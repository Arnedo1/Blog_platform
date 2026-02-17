import { useParams, useNavigate } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';
import { LuMessageCircle } from 'react-icons/lu';
import Header from '../components/Header';
import Comments from '../components/CommentList';
import UsersModal from '../components/UsersModal';
import type { BlogPost} from '../data/posts';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

interface BlogPostProps {
    blogPostList: BlogPost[];
    setBlogPostList:(value:BlogPost[])=>void
}

const BlogPostPage = (props: BlogPostProps) => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const { id } = useParams();
    const blog = props.blogPostList.find((post) => post.id === Number(id));

    if (!blog) {
        return <div>Blog niet gevonden!</div>;
    }

    const handleDelete = () => {
        const updatedlist = props.blogPostList.filter((post)=>post.id !== Number(id))
        props.setBlogPostList(updatedlist)
        navigate('/')

    }

    return (
        <div>
            <div className='fixed top-0'>
                <Header
                />
            </div>
            <div className='relative mt-18'>
                {auth?.userModal && auth?.currentUser !== null && (
                    <div className='fixed'>
                        <UsersModal
                        />
                    </div>
                )}
            </div>
            <div className='p-4 '>
                <div className='flex justify-around py-1 text-gray-500 bg-blue-50 rounded border border-blue-200 mb-4'>
                    <div 
                    onClick={()=>handleDelete()}
                    className='cursor-pointer'>Delete</div>
                    <div className='cursor-pointer'>Edit</div>
                </div>
                <div className='flex gap-4'>
                    <div>
                        <img
                            className='size-10 rounded-full'
                            src={blog.author.avatar}
                            alt='avatar'
                        />
                    </div>
                    <div>
                        <div>{blog.author.name}</div>
                        <div className='text-[12px] flex gap-1'>
                            <p>Posted</p>
                            {blog.date}
                        </div>
                    </div>
                </div>
                <div className='font-bold text-2xl my-4'>{blog.title}</div>
                <div className='flex gap-4 mb-4 text-[14px] text-gray-500'>
                    {blog.tags.map((tag) => (
                        <p key={tag}>#{tag}</p>
                    ))}
                </div>
                <div className='flex gap-4 mb-4 h-10 border-b border-gray-200'>
                    <div className='flex gap-1 cursor-pointer'>
                        <CiHeart className='size-5 cursor-pointer' />
                        <div className='text-[14px]'>{blog.likes}</div>
                    </div>
                    <div className='flex gap-1'>
                        <LuMessageCircle className='mt-0.5' />
                        <div className='text-[14px]'>
                            {blog.comments.length}
                        </div>
                    </div>
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: blog.content }}
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
            <Comments blog={blog} />
        </div>
    );
};

export default BlogPostPage;

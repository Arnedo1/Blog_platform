/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { BlogContext } from '../context/BlogContext';
import Header from '../components/Header';
import CommentList from '../components/CommentList';
import FooterMobile from '../components/FooterMobile';
import LikeBox from '../components/LikeBox';
import { AuthContext } from '../context/AuthContext';
import CommentCard from '../components/CommentCard';

const BlogPostPage = () => {
    const { id } = useParams();
    const nav = useNavigate();
    const blog = useContext(BlogContext);
    const auth = useContext(AuthContext);

    useEffect(() => {
        const fetchComments = async () => {
            const res = await fetch(`http://localhost:3001/comments/${id}`);
            const data = await res.json();
            blog?.setComments(data);
        };
        fetchComments();
    }, [id]);

    if (!auth || !blog) return null;
    const post = blog.blogPostList.find((post) => post.id === Number(id));
    if (!post) return <div>Blog niet gevonden!</div>;

    return (
        <div>
            <Header />
            <div className='flex'>
                <div className='md:block hidden'>
                    <LikeBox post={post} />
                </div>
                <div className='w-full'>
                    <div className='p-4 pb-20 mt-15'>
                        {post.user_id === auth?.currentUser?.id && (
                            <div className='flex justify-around py-1 text-gray-500 bg-blue-50 rounded border border-blue-200 mb-4'>
                                <div
                                    onClick={() => {
                                        blog.deleteBlog(post.id);
                                        nav(-1);
                                    }}
                                    className='cursor-pointer'>
                                    Delete
                                </div>
                                <div
                                    onClick={() => {
                                        blog.handleEdit(
                                            post.title,
                                            post.content,
                                            post.tags,
                                            post.id
                                        );
                                        nav('/edit_blog');
                                    }}
                                    className='cursor-pointer'>
                                    Edit
                                </div>
                            </div>
                        )}
                        <div className='flex gap-4'>
                            <div>
                                <img
                                    className='size-10 rounded-full'
                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.avatar}`}
                                    alt='avatar'
                                />
                            </div>
                            <div>
                                <div>{post.name}</div>
                                <div className='text-[12px] flex gap-1'>
                                    <p>
                                        Posted
                                        <span className='ml-1'>
                                            {new Date(
                                                post.created
                                            ).toLocaleDateString()}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='font-bold text-2xl my-4'>
                            {post.title}
                        </div>

                        <div
                            dangerouslySetInnerHTML={{ __html: post.content }}
                            className='
                    [&_p]:mt-1
                    [&_p]:mb-4
                    [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-4
                    [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mb-3
                    [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mb-2
                    [&_ul]:list-disc [&_ul]:pl-5
                    [&_strong]:font-bold
                    [&_em]:italic
                '
                        />
                        <div className='flex gap-4 mb-4 h-10 text-[14px] text-gray-500 border-b border-gray-200'>
                            {post.tags.map((tag) => (
                                <p key={tag}>#{tag}</p>
                            ))}
                        </div>
                        <CommentList post={post} />
                        {blog.comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                    />
                ))}
                    </div>
                    <div className='md:hidden'>
                        <FooterMobile post={post} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPostPage;

import { useContext, useState } from 'react';
import BlogList from '../components/BlogList';
import Header from '../components/Header';
import UsersModal from '../components/UsersModal';
import type { BlogPost } from '../data/posts';
import MenuModal from '../components/MenuModal';
import LoginModal from '../components/LoginModal';
import { AuthContext } from '../context/AuthContext';

interface HomePageProps {
    blogPostList: BlogPost[];
    setBlogPostList: (value: BlogPost[]) => void;
}

const HomePage = ({ blogPostList, setBlogPostList }: HomePageProps) => {
    const auth = useContext(AuthContext);
    const [topFilter, setTopFilter] = useState('');

    return (
        <div>
            <div>
                <Header />
                <div className='relative mt-18'>
                    {auth?.userModal && auth?.currentUser && (
                        <div className='fixed flex items-center justify-center bg-black/50 z-40'>
                            <UsersModal />
                        </div>
                    )}

                    {auth?.menuModal && !auth?.currentUser && (
                        <div className='fixed flex items-center justify-center bg-black/50 z-40'>
                            <MenuModal />
                        </div>
                    )}

                    {auth?.loginModal && (
                        <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-40'>
                            <LoginModal />
                        </div>
                    )}

                    <BlogList
                        topFilter={topFilter}
                        setTopFilter={setTopFilter}
                        blogPostList={blogPostList}
                        setBlogPostList={setBlogPostList}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;

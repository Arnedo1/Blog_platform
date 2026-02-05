import { useState } from 'react';
import BlogList from '../components/BlogList';
import Header from '../components/Header';
import UsersModal from '../components/UsersModal';
import type { BlogPost, User } from '../data/posts';
import MenuModal from '../components/MenuModal';
import LoginModal from '../components/LoginModal';
import type { UserArrayData } from '../data/posts';

interface HomePageProps {
    setCurrentUser: (value: User | null) => void;
    currentUser: User | null;
    menuModal: boolean;
    setMenuModal: (value: boolean) => void;
    userModal: boolean;
    setUserModal: (value: boolean) => void;
    loginModal: boolean;
    setLoginModal: (value: boolean) => void;
    userArray: UserArrayData[];
    blogPostList:BlogPost[]
    setBlogPostList:(value:BlogPost[])=>void
}

const HomePage = (props: HomePageProps) => {
    const [topFilter, setTopFilter] = useState('');

    return (
        <div>
            <div>
                <Header
                    setCurrentUser={props.setCurrentUser}
                    currentUser={props.currentUser}
                    userModal={props.userModal}
                    setUserModal={props.setUserModal}
                    menuModal={props.menuModal}
                    setMenuModal={props.setMenuModal}
                    userArray={props.userArray}
                />
                <div className='relative mt-18'>
 
                    {props.userModal && props.currentUser && (
                        <div className='fixed flex items-center justify-center bg-black/50 z-40'>
                            <UsersModal
                                setCurrentUser={props.setCurrentUser}
                                currentUser={props.currentUser}
                                userModal={props.userModal}
                                setUserModal={props.setUserModal}
                            />
                        </div>
                    )}


                    {props.menuModal && !props.currentUser && (
                        <div className='fixed flex items-center justify-center bg-black/50 z-40'>
                            <MenuModal
                                loginModal={props.loginModal}
                                setLoginModal={props.setLoginModal}
                                setMenuModal={props.setMenuModal}
                                menuModal={props.menuModal}
                                setCurrentUser={props.setCurrentUser}
                                currentUser={props.currentUser}
                            />
                        </div>
                    )}

  
                    {props.loginModal && (
                        <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-40'>
                            <LoginModal
                                loginModal={props.loginModal}
                                setLoginModal={props.setLoginModal}
                                userArray={props.userArray}
                                setCurrentUser={props.setCurrentUser}
                                currentUser={props.currentUser}
                            />
                        </div>
                    )}

                    <BlogList
                        topFilter={topFilter}
                        setTopFilter={setTopFilter}
                        userModal={props.userModal}
                        setUserModal={props.setUserModal}
                        blogPostList={props.blogPostList}
                        setBlogPostList={props.setBlogPostList}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
import { useState } from 'react';
import BlogList from '../components/BlogList';
import Header from '../components/Header';
import UsersModal from '../components/UsersModal';
import type { User } from '../data/posts';
import MenuModal from '../components/MenuModal';
import LoginModal from '../components/LoginModal';

interface HomePageProps {
    setCurrentUser: (value: User | null) => void;
    currentUser: User | null;
    menuModal: boolean;
    setMenuModal: (value: boolean) => void;
    userModal: boolean;
    setUserModal: (value: boolean) => void;
    loginModal: boolean;
    setLoginModal: (value: boolean) => void;
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
                />
                <div className='relative mt-18'>
                    {props.userModal &&
                        props.currentUser !== null &&
                        props.menuModal === false && (
                            <div className='fixed'>
                                <UsersModal
                                    setCurrentUser={props.setCurrentUser}
                                    currentUser={props.currentUser}
                                />
                            </div>
                        )}
                    {props.menuModal === true && props.userModal === false && (
                        <div className='fixed'>
                            <MenuModal
                                loginModal={props.loginModal}
                                setLoginModal={props.setLoginModal}
                                setMenuModal={props.setMenuModal}
                                menuModal={props.menuModal}
                            />
                        </div>
                    )}
                    {props.loginModal && (
                        <div className=''>
                            <LoginModal
                                loginModal={props.loginModal}
                                setLoginModal={props.setLoginModal}
                            />
                        </div>
                    )}
                    <BlogList
                        topFilter={topFilter}
                        setTopFilter={setTopFilter}
                        userModal={props.userModal}
                        setUserModal={props.setUserModal}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;

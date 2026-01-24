import { useState } from 'react';
import BlogList from '../components/BlogList';
import Header from '../components/Header';
import UsersModal from '../components/UsersModal';
import type { User } from '../data/posts';

interface HomePageProps {
    setCurrentUser: (value: User | null) => void;
    currentUser: User | null;
    userModal: boolean;
    setUserModal: (value: boolean) => void;
   
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
                />
                <div className='relative mt-18'>
                    {props.userModal && props.currentUser !== null && (
                        <div className='fixed'>
                            <UsersModal 
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
                    
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;

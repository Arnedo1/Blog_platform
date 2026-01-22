import { useState } from 'react';
import BlogList from '../components/BlogList';
import Header from '../components/Header';
import UsersModal from '../components/UsersModal';

interface User {
    name?: string;
    usersName?: string;
    email?: string;
    avatar?:string
}

interface HomePageProps {
    setCurrentUser: (value: User | null) => void;
    currentUser: User | null;
    userModal:boolean
    setUserModal:(value:boolean)=>void
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
                {props.userModal && <div className='fixed'><UsersModal/></div>}
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

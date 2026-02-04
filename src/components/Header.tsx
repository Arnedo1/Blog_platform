import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import type { UserArrayData } from '../data/posts';
import logo from '../assets/logo.svg'

interface User {
    name?: string;
    usersName?: string;
    email?: string;
    avatar?: string;
}

interface HeaderProps {
    setCurrentUser: (value: User | null) => void;
    currentUser: User | null;
    userModal: boolean;
    setUserModal: (value: boolean) => void;
    menuModal: boolean;
    setMenuModal: (value: boolean) => void;
    userArray: UserArrayData[];
}

const Header = (props: HeaderProps) => {
    return (
        <div className='flex p-4 fixed w-full top-0 z-20 bg-white justify-between px-4 shadow shadow-black/20'>
            <div className='flex gap-4'>
                <div>
                    <RxHamburgerMenu
                        onClick={() => {
                            if (!props.currentUser) {
                                props.setMenuModal(true);
                            }
                        }}
                        className='mt-1 h-8 w-6 cursor-pointer'
                    />
                </div>
                <div>
                    <Link to={'/'}>
                        <img
                            src={logo}
                            alt='Logo'
                            className='w-35 h-10 cursor-pointer'
                        />
                    </Link>
                </div>
            </div>

            <div>
                {props.currentUser && props.currentUser.avatar ? (
                    <div
                        onClick={() => {
                            if (!props.menuModal) {
                                props.setUserModal(true);
                            }
                        }}
                        className='size-10 flex justify-center items-center bg-gray-200 rounded-full cursor-pointer'>
                        <img
                            className='size-8'
                            src={props.currentUser.avatar}
                            alt='User avatar'
                        />
                    </div>
                ) : (
                    <Link to={'/registreren'}>
                        <button className='border border-black text-black cursor-pointer py-1 px-4 mt-1 rounded-sm'>
                            Registreer
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;
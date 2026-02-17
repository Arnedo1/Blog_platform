import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


const Header = () => {
    const auth = useContext(AuthContext)
    return (
        <div className='flex p-4 fixed w-full top-0 z-20 bg-white justify-between px-4 shadow shadow-black/20'>
            <div className='flex gap-4'>
                <div>
                    <RxHamburgerMenu
                        onClick={() => {
                            if (!auth?.currentUser) {
                                auth?.setMenuModal(true);
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
                {auth?.currentUser && auth?.currentUser.avatar ? (
                    <div
                        onClick={() => {
                            if (!auth?.menuModal) {
                                auth?.setUserModal(true);
                            }
                        }}
                        className='size-10 flex justify-center items-center bg-gray-200 rounded-full cursor-pointer'>
                        <img
                            className='size-8'
                            src={auth?.currentUser.avatar}
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
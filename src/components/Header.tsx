import { RxHamburgerMenu } from 'react-icons/rx';
import logo from '../assets/logo.svg';
import { Link } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
    const auth = useContext(AuthContext);
    if (!auth) return null
    return (
        <div className='flex py-3 fixed max-w-200 w-full top-0 z-20 bg-white justify-between px-4 shadow shadow-black/20'>
            <div className='flex gap-4'>
                <div>
                    <RxHamburgerMenu
                        onClick={() => (auth?.setMenuModal(true), auth?.setUserModal(false))}
                        className=' h-8 w-6 cursor-pointer'
                    />
                </div>
                <div>
                    <Link to={'/'}>
                        <img
                            src={logo}
                            alt='Logo'
                            className='w-35 h-8 cursor-pointer'
                        />
                    </Link>
                </div>
            </div>
            <div>
                {auth?.currentUser ? (
                    <div>
                        <img
                            onClick={()=>(auth.setUserModal(true), auth.setMenuModal(false), auth.setLoginModal(false))}
                            className='rounded-full size-8 mr-2'
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${auth.currentUser.avatar}`}
                        />
                    </div>
                ) : (
                    <Link to={'/register'}>
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

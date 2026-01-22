import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

interface User {
    name?: string;
    usersName?: string;
    email?: string;
    avatar?:string
}

interface HeaderProps {
    setCurrentUser: (value: User | null) => void;
    currentUser: User | null;
    userModal: boolean;
    setUserModal: (value: boolean) => void;
}

const Header = (props: HeaderProps) => {
    return (
        <div className='flex p-4 fixed w-full top-0 z-20 bg-white justify-between px-4 shadow shadow-black/20'>
            <div className='flex gap-4'>
                <div>
                    <RxHamburgerMenu className=' mt-1 h-8 w-6 cursor-pointer' />
                </div>
                <div>
                    <Link to={'/'}>
                        <img
                            src='./logo.svg'
                            alt='Logo'
                            className='w-35 h-10 cursor-pointer'
                        />
                    </Link>
                </div>
            </div>

            <div>
                {props.currentUser && props.currentUser.avatar ?(
                    <div 
                    onClick={()=>props.setUserModal(!props.userModal)}
                    className='size-10 flex justify-center items-center bg-gray-200 rounded-full'><img
                    className='size-8 cursor-pointer' src={props.currentUser.avatar} alt="" /></div>
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

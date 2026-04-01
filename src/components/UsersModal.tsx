import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router';

const UsersModal = () => {
    const auth = useContext(AuthContext);
    return (
        <div
            onClick={() => auth?.setUserModal(false)}
            className='bg-black/20 h-screen w-screen text-[14px]'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='bg-white flex text-gray-500 shadow-black/20 flex-col gap-3 p-4 mt-4 rounded-sm border-gray-300 border max-w-180  w-[90%] left-1/2 -translate-x-1/2 fixed'>
                <div className='text-black font-bold'>
                    {auth?.currentUser?.email}
                </div>
                <div className='border-b border-gray-300'></div>
                <div className='flex flex-col gap-2'>
                    <Link to={'instellingen'}>
                        <div 
                        onClick={()=>auth?.setUserModal(false)}
                        className='cursor-pointer'>Instellingen</div>
                    </Link>
                    <Link to={'/newblog'}>
                        <div
                            onClick={() => auth?.setUserModal(false)}
                            className='cursor-pointer'>
                            Nieuw Blog
                        </div>
                    </Link>
                </div>
                <div
                    onClick={() => auth?.logout()}
                    className='border-t cursor-pointer border-gray-300 pt-3'>
                    Log uit
                </div>
            </div>
        </div>
    );
};

export default UsersModal;

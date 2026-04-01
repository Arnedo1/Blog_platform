import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const MenuModal = () => {
    const auth = useContext(AuthContext);
    if (!auth) return null;
    return (
        <div
            onClick={() => auth.setMenuModal(false)}
            className='bg-black/20 h-screen w-screen'>
            <div className='bg-white flex text-gray-500 text-[14px] shadow-black/20 flex-col gap-4 p-3 mt-16 rounded-sm border-gray-300 border w-[95%] max-w-100 left-1/2 -translate-x-1/2 fixed'>
                {auth.currentUser ? 
                <div>
                Ingelogt
            </div>
                
                
                :<div
                    onClick={() => (
                        auth.setLoginModal(true), auth.setMenuModal(false)
                    )}
                    className='cursor-pointer'>
                    Log in
                </div>}
            </div>
        </div>
    );
};

export default MenuModal;

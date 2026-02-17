import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const MenuModal = () => {
    const authContext = useContext(AuthContext)
    return (
        <div 
        onClick={()=>authContext?.setMenuModal(false)}
        className='bg-black/20 h-screen w-screen'>
            <div className=' bg-white flex text-gray-500 shadowmdxl shadow-black/20 flex-col gap-4 p-4 mt-1 rounded-sm border-gray-300 border w-[95%] left-1/2 -translate-x-1/2 fixed'>
                <div
                    onClick={() => {
                        authContext?.setLoginModal(true);
                        authContext?.setMenuModal(false);
                    }}
                    className=' cursor-pointer '>
                    Login
                </div>
               
            </div>
        </div>
    );
};

export default MenuModal;

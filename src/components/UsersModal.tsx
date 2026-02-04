import { Link } from "react-router";
import type { User } from "../data/posts";

interface UserModalData{
    setCurrentUser: (value: User | null) => void;
    currentUser: User |null;
    userModal:boolean
    setUserModal:(value:boolean)=> void
}


const UsersModal = (props:UserModalData) => {
    return (
        <div 
        onClick={()=>props.setUserModal(false)}
        className='bg-black/20 h-screen w-screen'>
            <div 
            onClick={(e)=>e.stopPropagation()}
            className=' bg-white flex text-gray-500 shadowmdxl shadow-black/20 flex-col gap-4 p-4 mt-1 rounded-sm border-gray-300 border w-[95%] left-1/2 -translate-x-1/2 fixed'>
                <div className="border-b border-gray-300 pb-4">{props.currentUser?.name}</div>
                <div className="flex flex-col gap-4">
                    <div>Dashboard</div>
                    <div>Instellingen</div>
                    <Link to={'/newblog'}>
                    <div>Nieuw Blog</div>
                    </Link>
                </div>
                <div 
                onClick={(e)=>{
                    e.stopPropagation()
                    props.setCurrentUser(null)}}
                className="border-t cursor-pointer border-gray-300 pt-4">Log uit</div>
            </div>
        </div>
    );
};

export default UsersModal;

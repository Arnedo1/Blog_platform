import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const TopFilter = () => {
    const blog = useContext(BlogContext)
    if(!blog)return null
    
    return (
        <div className='bg-gray-100 h-12 items-center gap-4 px-4 text-[16px] text-gray-600 flex'>
            <p 
            onClick={()=>blog.setFilter('last')}
            className={blog.filter === 'last' ? 'w-20 font-bold cursor-pointer' : 'w-20 font-normal cursor-pointer'}>Laatste</p>
            <p 
            onClick={()=>blog.setFilter('top')}
            className={blog.filter === 'top' ? 'w-20 font-bold cursor-pointer' : 'w-20 font-normal cursor-pointer'}>Top</p>
        </div>
    );
};

export default TopFilter;
import { useState } from "react";

const TopFilter = () => {
    const [filter, setFilter] = useState('last')
    return (
        <div className='bg-gray-100 h-15 items-center gap-4 px-4 text-[18px] text-gray-600 flex'>
            <p 
            onClick={()=>setFilter('last')}
            className={filter === 'last' ? 'w-20 font-bold cursor-pointer' : 'w-20 font-normal cursor-pointer'}>Laatste</p>
            <p 
            onClick={()=>setFilter('top')}
            className={filter === 'top' ? 'w-20 font-bold cursor-pointer' : 'w-20 font-normal cursor-pointer'}>Top</p>
        </div>
    );
};

export default TopFilter;
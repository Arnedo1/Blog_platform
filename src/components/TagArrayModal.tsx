import { availableTags } from '../data/tags';
const TagArrayModal = () => {
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className='border h-35 overflow-scroll rounded-md p-4 pt-1 border-gray-300'>
            {availableTags.map((tag) => (
                <div className='py-1'>
                    <span className='mr-1'>#</span>
                    {tag}
                </div>
            ))}
        </div>
    );
};

export default TagArrayModal;

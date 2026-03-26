import { useContext } from 'react';
import { availableTags } from '../data/tags';
import { BlogContext } from '../context/BlogContext';

const TagArrayModal = () => {
    const blog = useContext(BlogContext);

    const handleTags = (tag: string) => {
        console.log('tag clicked', tag);
        console.log('current tags', blog?.tags);
        if (!blog?.tags.includes(tag) && (blog?.tags.length ?? 0) < 3) {
            blog?.setTags([...blog.tags, tag]);
        }
    };

    return (
        <div className='border h-35 z-210 overflow-scroll fixed bg-white rounded-md p-4 pt-1 border-gray-300'>
            {availableTags.map((tag) => (
                <div
                    onClick={() => handleTags(tag)}
                    key={tag}
                    className='py-1 mr-2'>
                    <span className='my-1'>#</span>
                    {tag}
                </div>
            ))}
        </div>
    );
};

export default TagArrayModal;

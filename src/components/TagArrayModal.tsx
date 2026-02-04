import { availableTags } from '../data/tags';

interface TagArrayModalProps{
    setBlogTags:(value:string[])=>void
    blogTags:string[]
}

const TagArrayModal = ({setBlogTags, blogTags}:TagArrayModalProps) => {
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className='border h-35 overflow-scroll fixed bg-white rounded-md p-4 pt-1 border-gray-300'>
            {availableTags.map((tag) => (
                <div 
                onClick={()=>{
                    if (blogTags.length < 3)
                    {setBlogTags([...blogTags, `# ${tag} `])}}}
                className='py-1 mr-2'>
                    <span className='my-1'>#</span>
                    {tag}
                </div>
            ))}
        </div>
    );
};

export default TagArrayModal;

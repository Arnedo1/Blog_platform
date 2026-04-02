import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { BlogContext } from '../context/BlogContext';
import BlogCard from '../components/BlogCard';

const Settings = () => {
    const auth = useContext(AuthContext);
    const blog = useContext(BlogContext);
    const [editName, setEditName] = useState<string>(auth?.currentUser?.name ?? '');
    const [editUserName, setEditUserName] = useState<string>(auth?.currentUser?.username ?? '');
    const [editEmail, setEditEmail] = useState<string>(auth?.currentUser?.email ?? '');
    const [editAvatar, setEditAvatar] = useState<string>(auth?.currentUser?.avatar ?? '');
    const [profilEdit, setProfilEdit] = useState<boolean>(false);

    if (!auth || !blog) return null;

    const userPosts = blog.blogPostList.filter(
        (post) => post.user_id === auth.currentUser?.id
    );

    const handleSave = () => {
        auth.updateUser(editName, editUserName, editEmail, editAvatar);
        setProfilEdit(false);
    };

    const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        const url = await auth?.uploadAvatar(file)
        if (url) setEditAvatar(url)
    }

    return (
        <div className='p-4'>
            <div className='flex justify-end items-center'>
                <button
                    onClick={() => profilEdit ? handleSave() : setProfilEdit(true)}
                    className='bg-gray-800 hover:bg-gray-700 px-2 text-white rounded-lg py-1.5 text-sm transition-colors'>
                    {profilEdit ? 'Opslaan' : 'Bewerk profiel'}
                </button>
            </div>

            <div className='flex justify-center mt-10'>
                <div className='relative'>
                    <img
                        className='size-24 rounded-full object-cover'
                        src={profilEdit ? editAvatar : auth.currentUser?.avatar ?? ''}
                        alt='avatar'
                    />
                    {profilEdit && (
                        <label className='absolute bottom-0 right-0 cursor-pointer bg-gray-800 text-white rounded-full p-1.5'>
                            ✏️
                            <input
                                type='file'
                                accept='image/*'
                                onChange={handleAvatarUpload}
                                className='hidden'
                            />
                        </label>
                    )}
                </div>
            </div>

            <div className='text-[17px] gap-2 text-gray-800 font-semibold flex flex-col items-center mt-6'>
                <div className='flex flex-col items-center'>
                    <div>Naam</div>
                    {profilEdit ? (
                        <input className='text-gray-500 pl-2 border rounded' value={editName} onChange={(e) => setEditName(e.target.value)} />
                    ) : (
                        <div className='text-gray-500 font-normal'>{auth.currentUser?.name}</div>
                    )}
                </div>
                <div className='flex flex-col items-center'>
                    <div>Gebruikersnaam</div>
                    {profilEdit ? (
                        <input className='text-gray-500 pl-2 border rounded' value={editUserName} onChange={(e) => setEditUserName(e.target.value)} />
                    ) : (
                        <div className='text-gray-500 font-normal'>{auth.currentUser?.username}</div>
                    )}
                </div>
                <div className='flex flex-col items-center'>
                    <div>Email</div>
                    {profilEdit ? (
                        <input className='text-gray-500 pl-2 border rounded' value={editEmail} onChange={(e) => setEditEmail(e.target.value)} />
                    ) : (
                        <div className='text-gray-500 font-normal'>{auth.currentUser?.email}</div>
                    )}
                </div>
            </div>

            <div className='mt-8'>
                {userPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Settings;
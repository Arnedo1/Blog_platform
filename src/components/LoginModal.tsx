import { useState } from 'react';
import type {User, UserArrayData } from '../data/posts';
import { useNavigate } from 'react-router';

interface LoginModalProps {
    loginModal: boolean;
    setLoginModal: (value: boolean) => void;
    userArray: UserArrayData[];
    currentUser: User | null;
    setCurrentUser: (value: User | null) => void;
}


const LoginModal = ({
    loginModal,
    setLoginModal,
    userArray,
    setCurrentUser
}: LoginModalProps) => {
    const [loginUserName, setLoginUserName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const navigate = useNavigate()

    const validate = () => {
    const exists = userArray.find((users)=> users.usersName === loginUserName)
        if(exists){
            const user = userArray.find((users)=> users.usersName === loginUserName)
            if (user) {
            setCurrentUser({
                usersName:user.usersName, 
                avatar:user.avatar, 
                email:user.email, 
                name:user.name})
            setLoginModal(!loginModal)}
        } else {
            navigate('/registreren')
        }
    };
    return (
        <div>
            <div
                onClick={() => setLoginModal(!loginModal)}
                className='bg-black/20 h-full w-100 absolute'>
                <div
                    onClick={(e) => e.stopPropagation()}
                    className='bg-white h-50 w-[90%] left-1/2 -translate-x-1/2 fixed top-1/2 -translate-y-1/2 rounded-md p-4 flex justify-center flex-col gap-4'>
                    <input
                        value={loginUserName}
                        onChange={(e) => setLoginUserName(e.target.value)}
                        placeholder='Gebruikersnaam'
                        className='border mb-2 pl-2 w-full rounded-sm border-gray-300 h-10'
                        type='text'
                    />
                    <input
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder='Paswoord'
                        className='border mb-2 pl-2 w-full rounded-sm border-gray-300 h-10'
                        type='password'
                    />
                    <button
                        onClick={() => validate()}
                        className='bg-blue-700 h-10 w-30 mx-auto rounded-sm text-white px-4'>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;

// bg-white flex text-gray-500 shadowmdxl shadow-black/20 flex-col gap-4 p-4 mt-1 rounded-sm border-gray-300 border w-[95%]

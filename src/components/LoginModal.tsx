import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';



const LoginModal = () => {
    const auth = useContext(AuthContext)
    const [loginUserName, setLoginUserName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const navigate = useNavigate()

    const validate = () => {
    const exists = auth?.userArray.find((users)=> users.usersName === loginUserName)
        if(exists){
            const user = auth?.userArray.find((users)=> users.usersName === loginUserName)
            if (user) {
            auth?.setCurrentUser({
                usersName:user.usersName, 
                avatar:user.avatar, 
                email:user.email, 
                name:user.name})
            auth?.setLoginModal(!auth?.loginModal)}
        } else {
            navigate('/registreren')
        }
    };
    return (
        <div>
            <div
                onClick={() => auth?.setLoginModal(!auth?.loginModal)}
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


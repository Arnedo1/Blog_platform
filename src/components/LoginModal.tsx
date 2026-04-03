import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { LuEye } from 'react-icons/lu';
import { FiEyeOff } from 'react-icons/fi';

const LoginModal = () => {
    const auth = useContext(AuthContext);
    const [emailLogin, setEmailLogin] = useState<string>('');
    const [passwordLogin, setPasswordLogin] = useState<string>('');
    const [passwordVisable, setPasswordVisable] = useState<boolean>(false);
    if (!auth) return null;

    return (
        <div>
            <div
                onClick={() => {
                    auth?.setLoginModal(false);
                }}
                className='bg-black/20 h-full w-screen fixed'>
                <div
                    onClick={(e) => e.stopPropagation()}
                    className='bg-white  h-50 max-w-100 w-[90%] left-1/2 -translate-x-1/2 fixed top-1/2 -translate-y-1/2 rounded-md p-4 flex justify-center flex-col gap-4'>
                    <input
                        placeholder='Email'
                        onChange={(e) => setEmailLogin(e.target.value)}
                        value={emailLogin}
                        className='border focus:outline-none mb-2 pl-2 w-full rounded-sm border-gray-300 h-10'
                        type='text'
                        onKeyDown={(e) =>
                            e.key === 'Enter' &&
                            auth?.login(passwordLogin, emailLogin)
                        }
                    />
                    <div className='border mb-2 flex justify-between pl-2 w-full rounded-sm border-gray-300 h-10'>
                        <input
                            placeholder='Paswoord'
                            onChange={(e) => setPasswordLogin(e.target.value)}
                            value={passwordLogin}
                            className='focus:outline-none w-full'
                            type={passwordVisable ? 'text' : 'password'}
                            onKeyDown={(e) =>
                                e.key === 'Enter' &&
                                auth?.login(passwordLogin, emailLogin)
                            }
                        />
                        <div className=' items-center flex mr-4'>
                            {passwordVisable === false ? <LuEye
                                className='size-5 text-gray-500 '
                                onClick={() =>
                                    setPasswordVisable(!passwordVisable)
                                }
                            /> :
                            <FiEyeOff
                                className='size-5 text-gray-500 '
                                onClick={() =>
                                    setPasswordVisable(!passwordVisable)
                                }
                            />}
                        </div>
                    </div>

                    <button
                        onClick={() => auth?.login(passwordLogin, emailLogin)}
                        className='bg-blue-700 h-10 w-30 mx-auto rounded-sm text-white px-4'>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;

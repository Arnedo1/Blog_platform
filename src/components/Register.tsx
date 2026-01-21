import { useState } from 'react';
import Header from './Header';


// const validatie

const Register = () => {
    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [UsersName, setUsersName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div>
            <Header />
            <div className='p-4'>
                <div className='text-xl font-bold mb-7'>Maak je account</div>
                <div className='text-[18px]'>
                    <div className='mb-3 '>Kies een standaard avatar</div>
                    <div className='flex gap-4 border mb-4 border-gray-200 rounded-sm py-3 px-5'>
                        <div
                            onClick={() => setAvatar('1')}
                            className={
                                avatar === '1'
                                    ? 'rounded-md size-12 bg-gray-200'
                                    : 'rounded-md size-12 bg-white'
                            }>
                            <img
                                className='size-10'
                                src='https://api.dicebear.com/7.x/avataaars/svg?seed=1'
                                alt=''
                            />
                        </div>
                        <div
                            onClick={() => setAvatar('2')}
                            className={
                                avatar === '2'
                                    ? 'rounded-md size-12 bg-gray-200'
                                    : 'rounded-md size-12 bg-white'
                            }>
                            <img
                                className='size-10'
                                src='https://api.dicebear.com/7.x/avataaars/svg?seed=2'
                                alt=''
                            />
                        </div>
                        <div
                            onClick={() => setAvatar('3')}
                            className={
                                avatar === '3'
                                    ? 'rounded-md size-12 bg-gray-200'
                                    : 'rounded-md size-12 bg-white'
                            }>
                            <img
                                className='size-10'
                                src='https://api.dicebear.com/7.x/avataaars/svg?seed=3 '
                                alt=''
                            />
                        </div>
                        <div
                            onClick={() => setAvatar('4')}
                            className={
                                avatar === '4'
                                    ? 'rounded-md size-12 bg-gray-200'
                                    : 'rounded-md size-12 bg-white'
                            }>
                            <img
                                className='size-10'
                                src='https://api.dicebear.com/7.x/avataaars/svg?seed=4'
                                alt=''
                            />
                        </div>
                        <div
                            onClick={() => setAvatar('5')}
                            className={
                                avatar === '5'
                                    ? 'rounded-md size-12 bg-gray-200'
                                    : 'rounded-md size-12 bg-white'
                            }>
                            <img
                                className='size-10'
                                src='https://api.dicebear.com/7.x/avataaars/svg?seed=5'
                                alt=''
                            />
                        </div>
                        <div
                            onClick={() => setAvatar('6')}
                            className={
                                avatar === '6'
                                    ? 'rounded-md size-12 bg-gray-200'
                                    : 'rounded-md size-12 bg-white'
                            }>
                            <img
                                className='size-10'
                                src='https://api.dicebear.com/7.x/avataaars/svg?seed=6'
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='text-[18px] mb-2'>
                        Naam <span className='text-red-600'>*</span>
                    </div>
                    <div>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className='border mb-2 pl-2 w-full rounded-sm border-gray-300 h-11'
                            type='text'
                            required
                        />
                    </div>
                </div>
                <div>
                    <div className='text-[18px] mb-2'>
                        Gebruikersnaam <span className='text-red-600'>*</span>
                    </div>
                    <div>
                        <input
                            onChange={(e) => setUsersName(e.target.value)}
                            value={UsersName}
                            className='border mb-2 pl-2 w-full rounded-sm border-gray-300 h-11'
                            type='text'
                            required
                        />
                    </div>
                </div>
                <div>
                    <div className='text-[18px] mb-2'>
                        Email <span className='text-red-600'>*</span>
                    </div>
                    <div>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='border mb-2 pl-2 w-full rounded-sm border-gray-300 h-11'
                            type='text'
                            required
                        />
                    </div>
                </div>
                <div>
                    <div className='text-[18px] mb-2'>
                        Paswoord <span className='text-red-600'>*</span>
                    </div>
                    <div>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className='border mb-2 pl-2 w-full rounded-sm border-gray-300 h-11'
                            type='text'
                            required
                        />
                    </div>
                </div>
                <div>
                    <div className='text-[18px] mb-2'>
                        Paswoord controle{' '}
                        <span className='text-red-600'>*</span>
                    </div>
                    <div>
                        <input
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            className='border w-full pl-2 mb-6 rounded-sm border-gray-300 h-11'
                            type='text'
                            required
                        />
                    </div>
                </div>
                <div>
                    <button className='bg-blue-700 py-3 rounded-sm text-white px-4'>
                        Registreer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router';
import { IoMdClose } from 'react-icons/io';
import type { UserArrayData } from '../data/posts';

interface FormErrors {
    avatar?: string;
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    usersName?: string;
}
interface User {
    name?: string;
    usersName?: string;
    email?: string;
    avatar?: string;
}

interface RegisterProps {
    setCurrentUser: (value: User | null) => void;
    currentUser: User | null;
    userModal: boolean;
    setUserModal: (value: boolean) => void;
    userArray: UserArrayData[];
    setUserArray: (value: UserArrayData[]) => void;
    menuModal: boolean;
    setMenuModal: (value: boolean) => void;
}

const Register = (props: RegisterProps) => {
    const navigate = useNavigate();
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [usersName, setUsersName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<FormErrors>({});

    const nameExist = props.userArray.find((users)=> users.usersName === usersName)
    const emailExist = props.userArray.find((users)=> users.email === email)

    const validate = () => {
        const newErrors: FormErrors = {};
        if (!name.trim()) {
            newErrors.name = 'Naam is verplicht';
        }
        if (!emailRegex.test(email)) {
            newErrors.email = 'Ongeldige email';
        }
        if (emailExist) {
            newErrors.email = 'Email bestaat al';
        }
        if (!usersName.trim()) {
            newErrors.usersName = 'Usersname is verplicht';
        }
        if (nameExist) {
            newErrors.usersName = 'Usersname bestaat al';
        }
        if (!passwordRegex.test(password)) {
            newErrors.password = '8 karakters, 1 hoofdletter en 1 teken';
        }
        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'paswoord komt niet overeen';
        }


        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const submitForm = () => {
        if (validate()) {
            props.setUserArray([
                ...props.userArray,
                {
                    id: Date.now(),
                    avatar,
                    name,
                    usersName,
                    email,
                    likes: 0,
                    posts: [],
                },
            ]);
            props.setCurrentUser({ avatar, name, usersName, email });
            setName('');
            setUsersName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setAvatar('');
            navigate(-1);
        }
    };
    useEffect(() => {
   console.log(props.userArray)
    }, [props.userArray])
    

    return (
        <div>
            <Header
                setCurrentUser={props.setCurrentUser}
                currentUser={props.currentUser}
                userModal={props.userModal}
                setUserModal={props.setUserModal}
                menuModal={props.menuModal}
                setMenuModal={props.setMenuModal}
                userArray={props.userArray}
            />
            <div className='p-4 mt-18'>
                <div className='flex justify-between items-center'>
                    <div className='text-xl font-bold mb-7'>
                        Maak je account
                    </div>
                    <div className=''>
                        <IoMdClose
                            onClick={() => navigate(-1)}
                            className='size-6 mb-5 mr-4'
                        />
                    </div>
                </div>

                <div className='text-[18px]'>
                    <div className='mb-3 '>Kies een standaard avatar</div>
                    <div className='flex gap-4 border mb-4 border-gray-200 rounded-sm py-3 px-5'>
                        <div
                            onClick={() =>
                                setAvatar(
                                    'https://api.dicebear.com/7.x/avataaars/svg?seed=1'
                                )
                            }
                            className={
                                avatar ===
                                'https://api.dicebear.com/7.x/avataaars/svg?seed=1'
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
                            onClick={() =>
                                setAvatar(
                                    'https://api.dicebear.com/7.x/avataaars/svg?seed=2'
                                )
                            }
                            className={
                                avatar ===
                                'https://api.dicebear.com/7.x/avataaars/svg?seed=2'
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
                            onClick={() =>
                                setAvatar(
                                    'https://api.dicebear.com/7.x/avataaars/svg?seed=3'
                                )
                            }
                            className={
                                avatar ===
                                'https://api.dicebear.com/7.x/avataaars/svg?seed=3'
                                    ? 'rounded-md size-12 bg-gray-200'
                                    : 'rounded-md size-12 bg-white'
                            }>
                            <img
                                className='size-10'
                                src='https://api.dicebear.com/7.x/avataaars/svg?seed=3'
                                alt=''
                            />
                        </div>
                        <div
                            onClick={() =>
                                setAvatar(
                                    'https://api.dicebear.com/7.x/avataaars/svg?seed=4'
                                )
                            }
                            className={
                                avatar ===
                                'https://api.dicebear.com/7.x/avataaars/svg?seed=4'
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
                            onClick={() =>
                                setAvatar(
                                    'https://api.dicebear.com/7.x/avataaars/svg?seed=5'
                                )
                            }
                            className={
                                avatar ===
                                'https://api.dicebear.com/7.x/avataaars/svg?seed=5'
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
                            onClick={() =>
                                setAvatar(
                                    'https://api.dicebear.com/7.x/avataaars/svg?seed=6'
                                )
                            }
                            className={
                                avatar ===
                                'https://api.dicebear.com/7.x/avataaars/svg?seed=6'
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
                    <div className='flex justify-between'>
                        <div className='text-[18px] mb-2'>
                            Naam <span className='text-red-600'>*</span>
                        </div>
                        <div>
                            {error.name && (
                                <p className='text-red-500  text-sm mt-1'>
                                    {error.name}
                                </p>
                            )}{' '}
                        </div>
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
                    <div className='flex justify-between'>
                        <div className='text-[18px] mb-2'>
                            Gebruikersnaam{' '}
                            <span className='text-red-600'>*</span>
                        </div>
                        <div>
                            {error.usersName && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {error.usersName}
                                </p>
                            )}{' '}
                        </div>
                    </div>

                    <div>
                        <input
                            onChange={(e) => setUsersName(e.target.value)}
                            value={usersName}
                            className='border mb-2 pl-2 w-full rounded-sm border-gray-300 h-11'
                            type='text'
                            required
                        />
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <div className='text-[18px] mb-2'>
                            Email <span className='text-red-600'>*</span>
                        </div>
                        <div>
                            {error.email && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {error.email}
                                </p>
                            )}{' '}
                        </div>
                    </div>
                    <div>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='border mb-2 pl-2 w-full rounded-sm border-gray-300 h-11'
                            type='email'
                            required
                        />
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <div className='text-[18px] mb-2'>
                            Paswoord <span className='text-red-600'>*</span>
                        </div>
                        <div>
                            {error.password && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {error.password}
                                </p>
                            )}{' '}
                        </div>
                    </div>
                    <div>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className='border mb-2 pl-2 w-full rounded-sm border-gray-300 h-11'
                            type='password'
                            required
                        />
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <div className='text-[18px] mb-2'>
                            Paswoord controle{' '}
                            <span className='text-red-600'>*</span>
                        </div>
                        <div>
                            {error.confirmPassword && (
                                <p className='text-red-500 text-sm mt-1'>
                                    {error.confirmPassword}
                                </p>
                            )}{' '}
                        </div>
                    </div>
                    <div>
                        <input
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            className='border w-full pl-2 mb-6 rounded-sm border-gray-300 h-11'
                            type='password'
                            required
                        />
                    </div>
                </div>

                <button
                    onClick={() => submitForm()}
                    className='bg-blue-700 py-3 rounded-sm text-white px-4'>
                    Registreer
                </button>
            </div>
        </div>
    );
};

export default Register;

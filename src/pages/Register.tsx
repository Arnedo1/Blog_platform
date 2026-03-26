import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

interface ErrorData {
    name?: string
    userName?: string
    password?: string
    confirmPassword?: string
    email?: string
    avatar?: string
}

const Register = () => {
    const auth = useContext(AuthContext)
    const nav = useNavigate()
    const [avatar, setAvatar] = useState('')
    const [name, setName] = useState('')
    const [usersName, setUsersName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState<ErrorData>({})

    const validate = () => {
        const newError: ErrorData = {}
        if (!name.trim()) newError.name = 'need name'
        if (!usersName.trim()) newError.userName = 'need usersname'
        if (password.trim().length < 8 || password.trim().length > 12) newError.password = 'password needs to be between 8 and 12 characters'
        if (password !== confirmPassword) newError.confirmPassword = 'The passwords need to match'
        if (!email.includes('@')) newError.email = 'Submit a valid email'
        if (!avatar) newError.avatar = 'Kies een avatar'

        setError(newError)
        return Object.keys(newError).length === 0
    }

    const onSubmit = async() => {
        if (validate()) {
            await auth?.register({name, usersName, email, avatar, password})
            nav('/')
        }
    }

    return (
        <div>
            <div className='p-4'>
                <div className='flex justify-between items-center'>
                    <div className='text-xl font-bold mb-7'>
                        Maak je account
                    </div>
                    <div>
                        <IoClose
                            onClick={() => nav(-1)}
                            className="size-7 cursor-pointer"
                        />
                    </div>
                </div>

                <div className='text-[18px]'>
                    <div className='mb-3'>Kies een standaard avatar</div>
                    {error.avatar && <p className='text-red-500 text-sm mb-2'>{error.avatar}</p>}
                    <div className='flex gap-4 border mb-4 border-gray-200 rounded-sm py-3 px-5'>
                        <div onClick={() => setAvatar('1')} className={avatar === '1' ? 'rounded-md bg-gray-200 size-12' : 'bg-white rounded-md size-12'}>
                            <img className='size-10' src='https://api.dicebear.com/7.x/avataaars/svg?seed=1' alt='' />
                        </div>
                        <div onClick={() => setAvatar('2')} className={avatar === '2' ? 'rounded-md bg-gray-200 size-12' : 'bg-white rounded-md size-12'}>
                            <img className='size-10' src='https://api.dicebear.com/7.x/avataaars/svg?seed=2' alt='' />
                        </div>
                        <div onClick={() => setAvatar('3')} className={avatar === '3' ? 'rounded-md bg-gray-200 size-12' : 'bg-white rounded-md size-12'}>
                            <img className='size-10' src='https://api.dicebear.com/7.x/avataaars/svg?seed=3' alt='' />
                        </div>
                        <div onClick={() => setAvatar('4')} className={avatar === '4' ? 'rounded-md bg-gray-200 size-12' : 'bg-white rounded-md size-12'}>
                            <img className='size-10' src='https://api.dicebear.com/7.x/avataaars/svg?seed=4' alt='' />
                        </div>
                        <div onClick={() => setAvatar('5')} className={avatar === '5' ? 'rounded-md bg-gray-200 size-12' : 'bg-white rounded-md size-12'}>
                            <img className='size-10' src='https://api.dicebear.com/7.x/avataaars/svg?seed=5' alt='' />
                        </div>
                        <div onClick={() => setAvatar('6')} className={avatar === '6' ? 'rounded-md bg-gray-200 size-12' : 'bg-white rounded-md size-12'}>
                            <img className='size-10' src='https://api.dicebear.com/7.x/avataaars/svg?seed=6' alt='' />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <div className='text-[18px] mb-2'>
                            Naam <span className='text-red-600'>*</span>
                        </div>
                        {error.name && <p className='text-red-500 text-sm mt-1'>{error.name}</p>}
                    </div>
                    <div>
                        <input value={name} onChange={(e) => setName(e.target.value)} className='border mb-2 pl-2 w-full rounded-sm border-gray-300 h-11' type='text' required />
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <div className='text-[18px] mb-2'>
                            Gebruikersnaam <span className='text-red-600'>*</span>
                        </div>
                        {error.userName && <p className='text-red-500 text-sm mt-1'>{error.userName}</p>}
                    </div>
                    <div>
                        <input value={usersName} onChange={(e) => setUsersName(e.target.value)} className='border mb-2 pl-2 w-full rounded-sm border-gray-300 h-11' type='text' required />
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <div className='text-[18px] mb-2'>
                            Email <span className='text-red-600'>*</span>
                        </div>
                        {error.email && <p className='text-red-500 text-sm mt-1'>{error.email}</p>}
                    </div>
                    <div>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className='border mb-2 pl-2 w-full rounded-sm border-gray-300 h-11' type='email' required />
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <div className='text-[18px] mb-2'>
                            Paswoord <span className='text-red-600'>*</span>
                        </div>
                        {error.password && <p className='text-red-500 text-sm mt-1'>{error.password}</p>}
                    </div>
                    <div>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className='border mb-2 pl-2 w-full rounded-sm border-gray-300 h-11' type='password' required />
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <div className='text-[18px] mb-2'>
                            Paswoord controle <span className='text-red-600'>*</span>
                        </div>
                        {error.confirmPassword && <p className='text-red-500 text-sm mt-1'>{error.confirmPassword}</p>}
                    </div>
                    <div>
                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='border w-full pl-2 mb-6 rounded-sm border-gray-300 h-11' type='password' required />
                    </div>
                </div>

                <button
                    onClick={() => onSubmit()}
                    className='bg-blue-700 py-3 rounded-sm text-white px-4'>
                    Registreer
                </button>
            </div>
        </div>
    );
};

export default Register;
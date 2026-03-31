import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import AvatarBox from "../components/AvatarBox";

interface ErrorData {
    name?: string
    username?: string
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
    const [usersname, setUsersName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState<ErrorData>({})

    const validate = () => {
        const newError: ErrorData = {}
        if (!name.trim()) newError.name = 'need name'
        if (!usersname.trim()) newError.username = 'need usersname'
        if (password.trim().length < 8 || password.trim().length > 12) newError.password = 'password needs to be between 8 and 12 characters'
        if (password !== confirmPassword) newError.confirmPassword = 'The passwords need to match'
        if (!email.includes('@')) newError.email = 'Submit a valid email'
        if (!avatar) newError.avatar = 'Kies een avatar'

        setError(newError)
        return Object.keys(newError).length === 0
    }

    const onSubmit = async() => {
        if (validate()) {
            await auth?.register({name, usersname, email, avatar, password})
            nav('/')
        }
    }

    return (
        <div>
            <div className=' h-screen bg-white p-4'>
                <div className='flex justify-between items-center mb-7'>
                    <div className='text-xl font-bold'>
                        Maak je account
                    </div>
                    <div>
                        <IoClose
                            onClick={() => nav(-1)}
                            className="size-7 cursor-pointer"
                        />
                    </div>
                </div>

                <AvatarBox avatar={avatar} setAvatar={setAvatar} error={error} height={0}/>
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
                        {error.username && <p className='text-red-500 text-sm mt-1'>{error.username}</p>}
                    </div>
                    <div>
                        <input value={usersname} onChange={(e) => setUsersName(e.target.value)} className='border mb-2 pl-2 w-full rounded-sm border-gray-300 h-11' type='text' required />
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
interface LoginModalProps {
    loginModal: boolean;
    setLoginModal: (value: boolean) => void;
}

const LoginModal = ({ loginModal, setLoginModal }: LoginModalProps) => {
    return (
        <div>
            <div
                onClick={() => setLoginModal(!loginModal)}
                className='bg-black/20 h-full w-100 absolute'>
                <div 
                onClick={(e)=>e.stopPropagation()}
                className='bg-white h-50 w-[90%] left-1/2 -translate-x-1/2 fixed top-1/2 -translate-y-1/2 rounded-md p-4 flex justify-center flex-col gap-4'>
                    <input
                        placeholder='Gebruikersnaam'
                        className='border mb-2 pl-2 w-full rounded-sm border-gray-300 h-10'
                        type='text'
                    />
                    <input
                        placeholder='Paswoord'
                        className='border mb-2 pl-2 w-full rounded-sm border-gray-300 h-10'
                        type='password'
                    />
                    <button className='bg-blue-700 h-10 w-30 mx-auto rounded-sm text-white px-4'>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;

// bg-white flex text-gray-500 shadowmdxl shadow-black/20 flex-col gap-4 p-4 mt-1 rounded-sm border-gray-300 border w-[95%]

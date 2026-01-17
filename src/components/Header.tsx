import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
    return (
        <div className='flex p-4 sticky top-0 bg-white justify-between px-4 shadow shadow-black/20'>
            <div>
                <RxHamburgerMenu className=' mt-1 size-8'/>
            </div>
            <div>
            <img src="/logo.svg" alt="Logo" className="w-35 h-10" />
            </div>
            <div>
                <button className='border border-black text-black py-1 px-4 mt-1 rounded-sm'>Registreer</button>
            </div>
        </div>
    );
};

export default Header;

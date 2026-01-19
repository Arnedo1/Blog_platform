import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex p-4 sticky top-0 bg-white justify-between px-4 shadow shadow-black/20'>
            <div className='flex gap-4'>
                <div>
                    <RxHamburgerMenu className=' mt-1 h-8 w-6 className="cursor-pointer"' />
                </div>
                <div>
                    <Link to={'/'}>
                        <img
                            src='/logo.svg'
                            alt='Logo'
                            className='w-35 h-10 className="cursor-pointer"'
                        />
                    </Link>
                </div>
            </div>

            <div>
                <button className='border border-black text-black cursor-pointer py-1 px-4 mt-1 rounded-sm'>
                    Registreer
                </button>
            </div>
        </div>
    );
};

export default Header;

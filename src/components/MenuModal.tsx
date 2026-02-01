interface MenuModalProps {
    loginModal: boolean;
    setLoginModal: (value: boolean) => void;
    menuModal: boolean;
    setMenuModal: (value: boolean) => void;
}

const MenuModal = ({
    loginModal,
    setLoginModal,
    menuModal,
    setMenuModal,
}: MenuModalProps) => {
    return (
        <div>
            <div className=' bg-white flex text-gray-500 shadowmdxl shadow-black/20 flex-col gap-4 p-4 mt-1 rounded-sm border-gray-300 border w-[95%] left-1/2 -translate-x-1/2 fixed'>
                <div
                    onClick={() => {
                        setLoginModal(!loginModal);
                        setMenuModal(!menuModal);
                    }}
                    className=' cursor-pointer '>
                    Login
                </div>
               
            </div>
        </div>
    );
};

export default MenuModal;

const UsersModal = () => {
    return (
        <div>
            <div className=' bg-white flex text-gray-500 shadow-md shadow-black/20 flex-col gap-4 p-4 mt-1 rounded-sm border-gray-300 border w-[95%] left-1/2 -translate-x-1/2 fixed'>
                <div className="border-b border-gray-300 pb-4">Jose Arnedo</div>
                <div className="flex flex-col gap-4">
                    <div>Dashboard</div>
                    <div>Instellingen</div>
                    <div>Nieuw Blog</div>
                </div>
                <div className="border-t border-gray-300 pt-4">Log uit</div>
            </div>
        </div>
    );
};

export default UsersModal;

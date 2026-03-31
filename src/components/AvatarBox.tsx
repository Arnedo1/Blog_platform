interface ErrorData {
    name?: string
    username?: string
    password?: string
    confirmPassword?: string
    email?: string
    avatar?: string
}

const AvatarBox = ({avatar, setAvatar, error, height}:{avatar:string, setAvatar:(value:string)=>void, error:ErrorData, height:number} ) => {
  return (
    <div className={`text-[18px] h-${height}`}>
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
  )
}

export default AvatarBox
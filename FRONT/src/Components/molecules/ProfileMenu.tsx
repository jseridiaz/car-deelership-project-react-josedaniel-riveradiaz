type ProfileMenuType = { booleanState: boolean }

const ProfileMenu: React.FC<ProfileMenuType> = ({ booleanState }) => (
   <div
      id='profil-menu'
      className={`absolute bg-blue-100 p-2 w-[250px] z-10 ${
         booleanState ? "visible" : "invisible"
      } rounded-b-xl`}
   >
      <ul className='flex flex-col items-start gap-4 p-2  '>
         <li className='transition duration-400 cursor-pointer font-medium hover:bg-slate-50 p-2 rounded w-full text-left'>
            information personal
         </li>
         <li className='transition duration-400 cursor-pointer font-medium hover:bg-slate-50 p-2 rounded w-full text-left'>
            Favourites
         </li>

         <li className='transition duration-400 cursor-pointer font-medium hover:bg-slate-50 p-2 rounded w-full text-left'>
            Chats
         </li>
         <li className='transition duration-400 cursor-pointer font-medium hover:bg-slate-50 p-2 rounded w-full text-left'>
            Settings
         </li>
      </ul>
   </div>
)

export default ProfileMenu

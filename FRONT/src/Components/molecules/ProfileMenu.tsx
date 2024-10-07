import { Dispatch, SetStateAction } from "react"
import { Link } from "react-router-dom"

type ProfileMenuType = {
   booleanState: boolean
   setBoolean: Dispatch<SetStateAction<boolean>>
}

const ProfileMenu: React.FC<ProfileMenuType> = ({ booleanState, setBoolean }) => {
   const hideMenu = () => {
      setBoolean(!booleanState)
   }

   return (
      <div
         id='profil-menu'
         className={`absolute bg-blue-100 p-2 w-[250px] z-10 ${
            booleanState ? "visible" : "invisible"
         } rounded-b-xl`}
      >
         <ul className='flex flex-col items-start gap-4 p-2  '>
            <li className='transition duration-400 cursor-pointer font-medium hover:bg-slate-50 p-2 rounded w-full text-left'>
               <Link
                  to='/'
                  className='w-full h-full block'
                  onClick={() => hideMenu()}
               >
                  information personal
               </Link>
            </li>
            <li className='transition duration-400 cursor-pointer font-medium hover:bg-slate-50 p-2 rounded w-full text-left'>
               <Link
                  to='/favourite-cars'
                  className='w-full h-full block'
                  onClick={() => hideMenu()}
               >
                  Favourites
               </Link>
            </li>

            <li className='transition duration-400 cursor-pointer font-medium hover:bg-slate-50 p-2 rounded w-full text-left'>
               <Link
                  to='/'
                  className='w-full h-full block'
                  onClick={() => hideMenu()}
               >
                  Chats
               </Link>
            </li>
            <li className='transition duration-400 cursor-pointer font-medium hover:bg-slate-50 p-2 rounded w-full text-left'>
               <Link
                  to='/'
                  className='w-full h-full block'
                  onClick={() => hideMenu()}
               >
                  Settings
               </Link>
            </li>
         </ul>
      </div>
   )
}

export default ProfileMenu

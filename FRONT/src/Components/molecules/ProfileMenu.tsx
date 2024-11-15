import { Dispatch, SetStateAction } from "react"
import LiProfileMenu from "./LiProfileMenu"
import PersonalInfoSvg from "../atoms/icons/PersonalInfoSvg/PersonalInfoSvg"
import FavouritesSvg from "../atoms/icons/FavouritesSvg/FavouritesSvg"
import ChatSvg from "../atoms/icons/ChatSvg/ChatSvg"
import SettingsSvg from "../atoms/icons/SettingsSvg/SettingsSvg"

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
         className={`absolute right-0 bg-blue-100 p-2 min-w-[250px] w-full  z-10 ${
            booleanState ? "visible" : "invisible"
         } rounded-b-xl`}
      >
         <ul className='flex flex-col items-start gap-4 p-2  '>
            <LiProfileMenu
               path='/personal-info'
               textLi='Personal information'
               handleClick={() => {
                  hideMenu()
               }}
            >
               <PersonalInfoSvg />
            </LiProfileMenu>
            <LiProfileMenu
               path='/favourite-cars'
               textLi='Favourites'
               handleClick={() => {
                  hideMenu()
               }}
            >
               <FavouritesSvg />
            </LiProfileMenu>
            <li className=' flex justify-between transition duration-400 font-medium hover:bg-slate-50 p-2 rounded w-full text-left items-center select-none '>
               Chats
               <ChatSvg />
            </li>
            <li className=' flex justify-between transition duration-400 font-medium hover:bg-slate-50 p-2 rounded w-full text-left items-center select-none'>
               Settings
               <SettingsSvg />
            </li>
         </ul>
      </div>
   )
}

export default ProfileMenu

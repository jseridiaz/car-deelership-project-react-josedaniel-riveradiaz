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
         className={`absolute bg-blue-100 p-2 w-[250px] z-10 ${
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
            <LiProfileMenu
               path=''
               textLi='Chats'
               handleClick={() => {
                  hideMenu()
               }}
            >
               <ChatSvg />
            </LiProfileMenu>

            <LiProfileMenu
               path=''
               textLi='Settings'
               handleClick={() => {
                  hideMenu()
               }}
            >
               <SettingsSvg />
            </LiProfileMenu>
         </ul>
      </div>
   )
}

export default ProfileMenu

import { useContext, useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { TokenContext } from "./Providers/GlobalToken"
import { LoggedContext } from "./Providers/GlobalLogged"
import ProfileMenu from "./molecules/ProfileMenu"
import { getStorage } from "../utils/functions/storage/getStorage"
import LiHeader from "./atoms/LiHeader"
import delStorage from "../utils/functions/storage/deleteStorage"

const HeaderComponent = () => {
   const [userInfo, setUserInfo] = useState<string | null>(null)
   const { token, setToken } = useContext(TokenContext)
   const { logged, setLogged } = useContext(LoggedContext)
   const [boolean, setBoolean] = useState<boolean>(false)
   const storageUser = getStorage("userInfo")

   useEffect(() => {
      setToken(localStorage.getItem("token"))
      setUserInfo(storageUser?.rol)
   }, [token])
   useEffect(() => {
      setLogged(sessionStorage.getItem("logged"))
      setUserInfo(storageUser?.rol)
   }, [logged])

   const handleClickProfile = (): void => {
      setBoolean(!boolean)
      console.log(boolean)
   }

   const handleLogout = () => {
      if (token) {
         delStorage("token")
         delStorage("idUser")
         delStorage("userInfo")
         setToken(localStorage.getItem("token"))
         setUserInfo(null)
      } else {
         delStorage("logged", false)
         delStorage("userInfo", false)
         setLogged(sessionStorage.getItem("logged"))
         setUserInfo(null)
      }
   }
   return (
      <header className='box-border w-full h-16 flex bg-slate-200 justify-around'>
         <div className='w-fit content-center'>
            <Link to='/home' className='text-2xl text-black font-bold ml-0'>
               Car seller
            </Link>
         </div>
         <nav className='flex w-fit gap-8'>
            <LiHeader>
               <NavLink
                  to='/home'
                  className='w-1/4 content-center text-blue-700 hover:font-bold'
               >
                  Home
               </NavLink>
            </LiHeader>
            <LiHeader>
               <NavLink
                  to='/cars-shop'
                  className='w-1/4 content-center text-blue-700 hover:font-bold '
               >
                  Autos
               </NavLink>
            </LiHeader>

            {userInfo === "admin" && (
               <LiHeader>
                  <NavLink
                     to='/post-auto'
                     className='w-1/4 content-center  text-blue-700 hover:font-bold'
                  >
                     Post
                  </NavLink>
               </LiHeader>
            )}
            <LiHeader>
               <NavLink
                  to='/about-us'
                  className='w-1/4 content-center text-blue-700 hover:font-bold'
               >
                  About us
               </NavLink>
            </LiHeader>
            {token || logged ? (
               <>
                  <LiHeader>
                     <span
                        className={`w-1/4 content-center font-medium hover:font-bold text-blue-700 cursor-pointer ${
                           boolean && "active"
                        } `}
                        onClick={() => {
                           handleClickProfile()
                        }}
                     >
                        Profile
                     </span>
                     <ProfileMenu
                        booleanState={boolean}
                        setBooleanState={() => {
                           setBoolean(!boolean)
                        }}
                     />
                  </LiHeader>
               </>
            ) : null}
            <LiHeader>
               <NavLink
                  to={token || logged ? "/" : "/login"}
                  className='w-1/4 content-center hover:font-bold text-blue-700 '
                  onClick={handleLogout}
               >
                  {token || logged ? "Log out" : "Login"}
               </NavLink>
            </LiHeader>
         </nav>
      </header>
   )
}

export default HeaderComponent

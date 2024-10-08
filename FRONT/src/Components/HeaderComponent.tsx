import { useContext, useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { TokenContext } from "./Providers/GlobalToken"
import { LoggedContext } from "./Providers/GlobalLogged"
import ProfileMenu from "./molecules/ProfileMenu"
import { getStorage } from "../utils/functions/storage/getStorage"

const HeaderComponent = () => {
   const [userInfo, setUserInfo] = useState<string | null>(null)
   const { token, setToken } = useContext(TokenContext)
   const { logged, setLogged } = useContext(LoggedContext)
   const [boolean, setBoolean] = useState<boolean>(false)
   const storageUser = getStorage("userInfo")

   useEffect(() => {
      setToken(localStorage.getItem("token"))
      setUserInfo(storageUser.rol)
   }, [token])
   useEffect(() => {
      setLogged(sessionStorage.getItem("logged"))
      setUserInfo(storageUser.rol)
   }, [logged])

   const handleClickProfile = (): void => {
      setBoolean(!boolean)
      console.log(boolean)
   }

   const handleLogout = () => {
      if (token) {
         localStorage.removeItem("token")
         localStorage.removeItem("idUser")
         localStorage.removeItem("userInfo")
         setToken(localStorage.getItem("token"))
         setUserInfo(null)
      } else {
         sessionStorage.removeItem("logged")
         sessionStorage.removeItem("userInfo")
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
            <li className='content-center'>
               <NavLink
                  to='/cars-shop'
                  className='w-1/4 content-center text-blue-700 hover:font-bold '
               >
                  Autos
               </NavLink>
            </li>

            <li className='content-center'>
               <NavLink
                  to='/about-us'
                  className='w-1/4 content-center text-blue-700 hover:font-bold'
               >
                  About us
               </NavLink>
            </li>
            {userInfo === "admin" && (
               <li className='content-center'>
                  <NavLink
                     to='/post-auto'
                     className='w-1/4 content-center  text-blue-700 hover:font-bold'
                  >
                     Post
                  </NavLink>
               </li>
            )}
            {token || logged ? (
               <>
                  <li className='content-center relative'>
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
                  </li>
               </>
            ) : null}
            <li className='content-center'>
               <NavLink
                  to={token || logged ? "/home" : "/login"}
                  className='w-1/4 content-center hover:font-bold text-blue-700 '
                  onClick={handleLogout}
               >
                  {token || logged ? "Log out" : "Login"}
               </NavLink>
            </li>
         </nav>
      </header>
   )
}

export default HeaderComponent

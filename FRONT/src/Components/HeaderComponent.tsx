import { useContext, useEffect, useReducer } from "react"
import { Link, NavLink } from "react-router-dom"
import { TokenContext } from "./Providers/GlobalToken"
import { LoggedContext } from "./Providers/GlobalLogged"
import ProfileMenu from "./molecules/ProfileMenu"
import { getStorage } from "../utils/functions/storage/getStorage"
import LiHeader from "./atoms/LiHeader"
import delStorage from "../utils/functions/storage/deleteStorage"
import MenuMobile from "./atoms/MenuMobile"
import {
   HeaderComponentReducer,
   INITIAL_STATE_HEADER,
} from "./customHooks/useReducer/HeaderComponentReducer"
import { HeaderComponentAction, HeaderComponentType } from "../utils/types"

const HeaderComponent = () => {
   const { token, setToken } = useContext(TokenContext)
   const { logged, setLogged } = useContext(LoggedContext)

   const [state, dispatch] = useReducer<
      React.Reducer<HeaderComponentType, HeaderComponentAction>
   >(HeaderComponentReducer, INITIAL_STATE_HEADER)
   const storageUser = getStorage("userInfo")

   const resizeHandler = () => {
      dispatch({ type: "setViewPort", payload: window.innerWidth })
   }

   useEffect(() => {
      setToken(localStorage.getItem("token"))
      dispatch({ type: "setUserInfo", payload: storageUser?.rol })
   }, [token])
   useEffect(() => {
      setLogged(sessionStorage.getItem("logged"))
      dispatch({ type: "setUserInfo", payload: storageUser?.rol })
   }, [logged])
   useEffect(() => {
      window.addEventListener("resize", resizeHandler)
      if (state.viewPort >= 768) {
         dispatch({ type: "setShowNav", payload: true })
      }
      return () => {
         window.removeEventListener("resize", resizeHandler)
      }
   }, [state.viewPort])

   const handleClickProfile = (): void => {
      dispatch({ type: "setBoolean" })
   }

   const handleLogout = () => {
      if (token) {
         delStorage("token")
         delStorage("idUser")
         delStorage("userInfo")
         setToken(localStorage.getItem("token"))
      } else {
         delStorage("token", false)
         delStorage("logged", false)
         delStorage("userInfo", false)
         setLogged(sessionStorage.getItem("logged"))
      }
      dispatch({ type: "setUserInfo", payload: null })
   }
   const handleClick = () => {
      dispatch({ type: "setShowNav" })
   }
   return (
      <header
         className={`box-border w-full h-16 flex bg-slate-200 justify-around
         `}
      >
         <div className='w-fit content-center'>
            <Link to='/home' className='text-2xl text-black font-bold ml-0'>
               Car seller
            </Link>
         </div>
         <nav
            className={`${
               state.showNav == true
                  ? "hidden"
                  : "flex flex-col absolute bg-slate-300 p-8 gap-8 text-xl top-24 text-left right-0 z-20 w-1/2 "
            } md:w-fit md:gap-8 block md:flex `}
         >
            <LiHeader>
               <NavLink
                  to='/home'
                  className='w-1/4 content-center text-blue-700 hover:font-bold'
                  onClick={() => dispatch({ type: "setShowNav", payload: true })}
               >
                  Home
               </NavLink>
            </LiHeader>
            <LiHeader>
               <NavLink
                  to='/cars-shop'
                  className='w-1/4 content-center text-blue-700 hover:font-bold '
                  onClick={() => dispatch({ type: "setShowNav", payload: true })}
               >
                  Autos
               </NavLink>
            </LiHeader>

            {state.userInfo === "admin" && (
               <LiHeader>
                  <NavLink
                     to='/post-auto'
                     className='w-1/4 content-center  text-blue-700 hover:font-bold'
                     onClick={() => dispatch({ type: "setShowNav", payload: true })}
                  >
                     Post
                  </NavLink>
               </LiHeader>
            )}
            <LiHeader>
               <NavLink
                  to='/about-us'
                  className='w-1/4 content-center text-center text-blue-700 hover:font-bold'
                  onClick={() => dispatch({ type: "setShowNav", payload: true })}
               >
                  About us
               </NavLink>
            </LiHeader>
            {token || logged ? (
               <>
                  <LiHeader>
                     <span
                        className={`w-1/4 content-center font-medium hover:font-bold text-blue-700 cursor-pointer ${
                           state.boolean && "active"
                        } `}
                        onClick={() => {
                           handleClickProfile()
                        }}
                     >
                        Profile
                     </span>
                     <ProfileMenu
                        booleanState={state.boolean}
                        setBoolean={() => {
                           dispatch({ type: "setBoolean" })
                           if (state.viewPort > 768) {
                              dispatch({ type: "setShowNav", payload: true })
                           } else {
                              dispatch({ type: "setShowNav", payload: false })
                           }
                        }}
                     />
                  </LiHeader>
               </>
            ) : null}
            <LiHeader>
               <NavLink
                  to={token || logged ? "/" : "/login"}
                  className='w-1/4 content-center hover:font-bold text-blue-700 '
                  onClick={() => {
                     handleLogout()
                  }}
               >
                  {token || logged ? "Log out" : "Login"}
               </NavLink>
            </LiHeader>
         </nav>
         <MenuMobile handleClick={handleClick} />
      </header>
   )
}

export default HeaderComponent

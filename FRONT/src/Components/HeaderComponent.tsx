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
// import useResize from "./customHooks/useResize"
import { ResizeContext } from "./Providers/GlobalResize"

const HeaderComponent = () => {
   const { token, setToken } = useContext(TokenContext)
   const { logged, setLogged } = useContext(LoggedContext)
   const { desktop, changeViewPort } = useContext(ResizeContext)

   const [state, dispatch] = useReducer<
      React.Reducer<HeaderComponentType, HeaderComponentAction>
   >(HeaderComponentReducer, INITIAL_STATE_HEADER)

   useEffect(() => {
      const storageUser = getStorage("userInfo")
      dispatch({ type: "setUserInfo", payload: storageUser?.rol })
   }, [token, logged])

   useEffect(() => {
      changeViewPort()
      // extraFunction(state.showNav, dispatch)

      return () => {
         window.removeEventListener("resize", changeViewPort)
      }
   }, [window.innerWidth])

   const handleClickProfile = (): void => {
      dispatch({ type: "setBoolean" })
   }

   const handleLogout = () => {
      if (localStorage.getItem("token")) {
         delStorage("token")
         delStorage("idUser")
         delStorage("userInfo")
         setToken(null)
         setLogged(null)
      } else {
         delStorage("token", false)
         delStorage("logged", false)
         delStorage("userInfo", false)
         setToken(null)
         setLogged(null)
      }
      dispatch({ type: "setUserInfo", payload: null })
   }
   const handleClick = () => {
      dispatch({ type: "setShowNav" })
   }
   return (
      <header
         className={`box-border w-full min-h-[64px] h-16 flex bg-slate-200 justify-around
         `}
      >
         <div className='w-fit content-center'>
            <Link to='/home' className='text-2xl text-black font-bold ml-0'>
               Car seller
            </Link>
         </div>
         <nav
            className={`${
               state.showNav && desktop
                  ? "hidden"
                  : "flex flex-col absolute bg-slate-300 p-8 gap-8 text-xl top-[5.6rem] text-left right-0 z-20 w-1/2 "
            } md:w-fit md:gap-8 block md:flex`}
         >
            <ul
               className={`${
                  state.showNav && desktop ? "flex " : "flex flex-col"
               } gap-8`}
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
                        onClick={() =>
                           dispatch({ type: "setShowNav", payload: true })
                        }
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
                              if (desktop) {
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
                        if (!token || !logged)
                           dispatch({ type: "setShowNav", payload: true })
                     }}
                  >
                     {token || logged ? "Log out" : "Login"}
                  </NavLink>
               </LiHeader>
            </ul>
         </nav>
         <MenuMobile handleClick={handleClick} />
      </header>
   )
}

export default HeaderComponent

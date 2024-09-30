import { useContext, useEffect } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { TokenContext } from "./Providers/GlobalToken"
import { LoggedContext } from "./Providers/GlobalLogged"
import BooleanState from "./customHooks/BooleanState"

const HeaderComponent = () => {
   const { token, setToken } = useContext(TokenContext)
   const { logged, setLogged } = useContext(LoggedContext)
   const [value, setvalue] = BooleanState()

   useEffect(() => {
      setToken(localStorage.getItem("token"))
   }, [token])
   useEffect(() => {
      setLogged(sessionStorage.getItem("logged"))
   }, [logged])

   const handleClickProfile = () => {
      setvalue()
      console.log(value)
   }

   const handleLogout = () => {
      localStorage.removeItem("token")
      sessionStorage.removeItem("logged")
      setToken(localStorage.getItem("token"))
      setLogged(sessionStorage.getItem("logged"))
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
            {token ||
               (logged && (
                  <li className='content-center relative'>
                     <span
                        className='w-1/4 content-center hover:font-bold text-blue-700'
                        onClick={() => {
                           handleClickProfile
                        }}
                     >
                        Profil
                     </span>
                     <div
                        id='profil-menu'
                        className={`absolute bg-slate-100 p-2 w-[200px] z-10 ${
                           value ? "invisible" : "visible"
                        }`}
                     >
                        <ul className='flex flex-col items-start'>
                           <li>information personal</li>
                           <li>Chats</li>
                        </ul>
                     </div>
                  </li>
               ))}
            <li className='content-center'>
               <NavLink
                  to={token || logged ? "/home" : "/login"}
                  className='w-1/4 content-center hover:font-bold text-blue-700'
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

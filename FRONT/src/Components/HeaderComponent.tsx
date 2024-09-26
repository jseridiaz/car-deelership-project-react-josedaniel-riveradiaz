import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { TokenContext } from "./Providers/GlobalToken"

const HeaderComponent = () => {
   const { token, setToken } = useContext(TokenContext)

   const handleLogout = () => {
      localStorage.removeItem("token")
      setToken(localStorage.getItem("token"))
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
                  New Autos
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
            <li className='content-center'>
               <NavLink
                  to={token ? "/home" : "/login"}
                  className='w-1/4 content-center hover:font-bold text-blue-700'
                  onClick={handleLogout}
               >
                  {token ? "Log out" : "Login"}
               </NavLink>
            </li>
         </nav>
      </header>
   )
}

export default HeaderComponent

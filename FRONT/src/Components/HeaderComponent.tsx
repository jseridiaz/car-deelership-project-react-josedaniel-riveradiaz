import { Link, NavLink } from "react-router-dom"

const HeaderComponent = () => {
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
                  to='/login'
                  className='w-1/4 content-center hover:font-bold text-blue-700'
               >
                  Login
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
         </nav>
      </header>
   )
}

export default HeaderComponent

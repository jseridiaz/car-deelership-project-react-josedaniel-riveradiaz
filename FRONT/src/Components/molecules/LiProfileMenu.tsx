import React from "react"
import { Link } from "react-router-dom"
type LiProfileMenuType = {
   path: string
   handleClick: () => void
   children: React.ReactNode
   textLi: string
}
const LiProfileMenu: React.FC<LiProfileMenuType> = ({
   path,
   handleClick,
   children,
   textLi,
}) => {
   return (
      <li className='transition duration-400 cursor-pointer font-medium hover:bg-slate-50 p-2 rounded w-full text-left content-center'>
         <Link
            to={path}
            className=' flex justify-between w-full h-full'
            onClick={handleClick}
         >
            <p className='content-center'>{textLi}</p>
            {children}
         </Link>
      </li>
   )
}

export default LiProfileMenu

import React from "react"
import { Link } from "react-router-dom"

interface BannerProps {
   children: React.ReactNode
   color: string
}
const Banner: React.FC<BannerProps> = ({ children, color }) => {
   // useEffect(()=>{

   // },[])

   return (
      <div className={`w-screen ${color}`}>
         <Link
            to='/car-offer'
            className='w-full mx-auto delay-75 rotate-0 text-cyan-500 font-semibold transition ease-in-out hover:duration-500 hover:text-cyan-100 '
         >
            {children}
         </Link>
      </div>
   )
}

export default Banner

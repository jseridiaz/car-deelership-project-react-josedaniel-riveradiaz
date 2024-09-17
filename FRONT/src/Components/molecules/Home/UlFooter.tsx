import React from "react"
import { Link } from "react-router-dom"
interface UlFooterType {
   title: string
   arrayLi: { name: string; to: string }[]
}
const UlFooter: React.FC<UlFooterType> = ({ title, arrayLi }) => {
   return (
      <ul className='flex flex-col text-left p-1'>
         <li className='font-medium'>{title}</li>
         <div className='flex flex-col mt-2 gap-2'>
            {arrayLi.map((el, idx) => (
               <Link
                  key={idx}
                  className='font-normal text-gray-200 hover:underline underline-offset-2 p-1 text-sm '
                  to={el.to}
               >
                  <li className='w-full'>{el.name}</li>
               </Link>
            ))}
         </div>
      </ul>
   )
}

export default UlFooter

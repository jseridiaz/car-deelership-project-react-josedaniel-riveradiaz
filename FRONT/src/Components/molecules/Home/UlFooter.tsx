import React from "react"
import { Link } from "react-router-dom"
interface UlFooterType {
   title: string
   arrayLi: { name: string; to: string }[]
}
const UlFooter: React.FC<UlFooterType> = ({ title, arrayLi }) => {
   return (
      <ul className='min-w-[120px] w-full sm:w-1/4 flex flex-wrap flex-col text-left p-1 items-center'>
         <li className='font-medium text-left'>{title}</li>
         <li className='flex flex-col mt-2 gap-2 '>
            {arrayLi.map((el, idx) => (
               <Link
                  key={idx}
                  className='font-normal text-gray-200 hover:underline underline-offset-2 p-1 text-sm '
                  to={el.to}
               >
                  {el.name}
               </Link>
            ))}
         </li>
      </ul>
   )
}

export default UlFooter

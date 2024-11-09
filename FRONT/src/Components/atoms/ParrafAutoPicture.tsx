import React from "react"
import { parrafAutoType } from "../../utils/types"

const ParrafAutoPicture: React.FC<parrafAutoType> = ({ el, children }) => {
   // if (children == "Kilometer:") console.log("ok")

   return (
      <p className='w-full text-left font-medium text-sm sm:text-base bg-white rounded-md flex flex-nowrap justify-between px-3'>
         {children}
         <span className={`ml-1 ${children === "Price:" ? "text-nowrap" : null}`}>
            {el}
         </span>
      </p>
   )
}

export default ParrafAutoPicture

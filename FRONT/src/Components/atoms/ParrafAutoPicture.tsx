import React from "react"
import { parrafAutoType } from "../../utils/types"

const ParrafAutoPicture: React.FC<parrafAutoType> = ({ el, children }) => {
   return (
      <p className='w-full text-left font-medium bg-white rounded-md flex flex-nowrap justify-between px-3'>
         {children} <span>{el}</span>
      </p>
   )
}

export default ParrafAutoPicture

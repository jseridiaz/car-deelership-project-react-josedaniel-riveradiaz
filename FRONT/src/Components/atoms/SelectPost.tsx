import React from "react"
import { InputTextFormType } from "../../utils/types"

const SelectPost: React.FC<InputTextFormType> = ({ children, name, register }) => {
   return (
      <select
         className='w-full text-center p-2 font-medium hover:bg-blue-200 focus:bg-blue-200 rounded-sm'
         defaultValue=''
         {...register(name, { required: true })}
      >
         {children}
      </select>
   )
}

export default SelectPost

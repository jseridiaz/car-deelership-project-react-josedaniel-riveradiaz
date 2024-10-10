import React from "react"
import { InputTextFormType } from "../../utils/types"

const SelectPost: React.FC<InputTextFormType> = ({ children, name, register }) => {
   return (
      <select
         className='w-full text-center p-2 hover:bg-slate-100 focus:bg-slate-100'
         defaultValue=''
         {...register(name, { required: true })}
      >
         {children}
      </select>
   )
}

export default SelectPost

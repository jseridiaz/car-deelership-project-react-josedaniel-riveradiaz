import React from "react"
import { InputTextFormType } from "../../utils/types"

const InputTextForm: React.FC<InputTextFormType> = ({
   type = "text",
   register,
   name,
   placeholders,
}) => {
   return (
      <input
         className='w-full placeholder:text-center text-center p-2 rounded-sm'
         type={type}
         placeholder={placeholders}
         {...register(name, { required: true })}
      />
   )
}

export default InputTextForm

import React from "react"
import { InputTextFormType } from "../../utils/types"

const InputTextForm: React.FC<InputTextFormType> = ({
   type = "text",
   register,
   name,
   placeholders,
   requiredBoolean = true,
}) => {
   return (
      <input
         className='w-full placeholder:text-center text-center cursor-pointer p-2 font-medium rounded-sm hover:bg-blue-200 focus:bg-blue-200'
         type={type}
         placeholder={placeholders}
         {...register(name, { required: requiredBoolean })}
      />
   )
}

export default InputTextForm

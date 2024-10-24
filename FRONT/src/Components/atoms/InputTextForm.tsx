import React from "react"
import { InputTextFormType } from "../../utils/types"

const InputTextForm: React.FC<InputTextFormType> = ({
   type = "text",
   register,
   name,
   placeholders,
   autoComplete = "on",
   requiredBoolean = true,
}) => {
   return (
      <input
         className='p-2 text-sm w-full  border-2 border-gray-500 border-solid placeholder:text-sm rounded  focus:border-none focus:outline-8 focus:outline-blue-300 focus:outline-offset-4'
         type={type}
         autoComplete={autoComplete}
         placeholder={placeholders}
         {...register(name, { required: requiredBoolean })}
      />
   )
}

export default InputTextForm

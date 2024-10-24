import { InputFormType } from "../../utils/types"

const InputForm: React.FC<InputFormType> = ({
   id,
   placeholder,
   name,
   type = "text",
   auto,
   children,
}) => {
   return (
      <fieldset className='flex flex-col gap-1 w-[80%]'>
         <label htmlFor={id} className='self-start font-normal'>
            {children}
         </label>
         <input
            type={type}
            id={id}
            placeholder={placeholder}
            name={name}
            autoComplete={auto ? "on" : "off"}
            className='p-2 text-sm border-2 border-gray-500 border-solid placeholder:text-sm rounded'
         />
      </fieldset>
   )
}

export default InputForm

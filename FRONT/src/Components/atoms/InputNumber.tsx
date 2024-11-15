import { InputNumberType } from "../../utils/types"

const InputNumber: React.FC<InputNumberType> = ({
   spanName,
   idName,
   handleInput,
   numberValue,
   reference,
   handleKey,
   placeholder,
}) => {
   return (
      <div className='relative flex gap-2 p-1 justify-between w-full sm:w-[220px] '>
         <label
            className='relative sm:left-0 min-[370px]:left-[10%] left-0 '
            htmlFor={idName}
         >
            {spanName}
         </label>
         <input
            className=' text-center placeholder:text-center sm:w-[150px] w-[70%] min-w-[160px] '
            type='number'
            name={spanName}
            id={idName}
            onInput={handleInput}
            onKeyDown={handleKey}
            ref={reference}
            placeholder={placeholder ? placeholder : ""}
         />
         {numberValue && (
            <span
               className={`absolute ${
                  numberValue === "Km" ? "-right-6" : "-right-3"
               }`}
            >
               {numberValue}
            </span>
         )}
      </div>
   )
}

export default InputNumber

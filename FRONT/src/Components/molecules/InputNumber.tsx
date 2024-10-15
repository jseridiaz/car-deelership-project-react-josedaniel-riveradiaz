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
      <div className='relative flex gap-2 p-1 justify-between w-[240px]'>
         <label htmlFor={idName}>{spanName}</label>
         <input
            className=' text-center placeholder:text-center w-[150px]'
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

import { useEffect, useState } from "react"
import { InputRangeType } from "../../utils/types"

const InputRange: React.FC<InputRangeType> = ({
   idName,
   children,
   defaultValue,
   minValue,
   maxValue,
   numberValue,
   step,
   reference,
   firstValue,
   handleChange,
   setValue,
}) => {
   const [currentValue, setCurrentValue] = useState<number>(firstValue)
   useEffect(() => {
      setCurrentValue(setValue)
   }, [setValue])

   return (
      <div className='relative flex gap-2 p-1 justify-between items-center w-[200px] sm:w-[220px] max-[350px]:flex-wrap max-[350px]:justify-center  '>
         <label htmlFor={idName}>{children}</label>
         <input
            type='range'
            id={idName}
            min={minValue}
            max={maxValue}
            defaultValue={defaultValue}
            step={step}
            ref={reference}
            onMouseUp={() => {
               handleChange()
            }}
            onTouchEnd={() => {
               handleChange()
            }}
            onChange={() => {
               setCurrentValue(setValue)
            }}
         />
         {numberValue && (
            <span
               className={`relative text-nowrap min-w-[61px] ${
                  numberValue === "Km" ? "-right-6" : "-right-3"
               }`}
            >
               {`${numberValue ? currentValue + numberValue : currentValue}`}
            </span>
         )}
      </div>
   )
}

export default InputRange

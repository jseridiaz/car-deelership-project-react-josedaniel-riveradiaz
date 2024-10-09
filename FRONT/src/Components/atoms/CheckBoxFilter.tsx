import { CheckboxFilter } from "../../utils/types"

const CheckBoxFilter: React.FC<CheckboxFilter> = ({
   idName,
   children,
   typeInput,
   valueRef,
   checked,
   handleChange,
   reference,
}) => {
   return (
      <div className='flex gap-2 items-center'>
         <label htmlFor={idName} className='cursor-pointer'>
            {children}
         </label>
         <input
            type={typeInput}
            id={idName}
            name={valueRef}
            onChange={handleChange}
            className='cursor-pointer '
            ref={reference}
            defaultChecked={checked}
         />
      </div>
   )
}

export default CheckBoxFilter

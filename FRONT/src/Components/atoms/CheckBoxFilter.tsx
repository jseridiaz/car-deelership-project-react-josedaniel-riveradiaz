import { CheckboxFilter } from "../../utils/types"

const CheckBoxFilter: React.FC<CheckboxFilter> = ({
   idName,
   children,
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
            type='checkbox'
            id={idName}
            onChange={handleChange}
            className='cursor-pointer '
            ref={reference}
            defaultChecked={checked}
         />
      </div>
   )
}

export default CheckBoxFilter

import React from "react"
import { FieldSetType } from "../../utils/types"

const FieldSet: React.FC<FieldSetType> = ({ description, children }) => {
   return (
      <fieldset className='flex flex-col gap-1 w-[30%] relative pb-4 items-center'>
         <label className=' font-bold'>{description}</label>
         {children}
      </fieldset>
   )
}

export default FieldSet

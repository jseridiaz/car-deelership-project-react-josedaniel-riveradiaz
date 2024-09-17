import React from "react"
import { FieldSetType } from "../../utils/types"

const FieldSet: React.FC<FieldSetType> = ({ description, children }) => {
   return (
      <fieldset className='flex flex-col gap-1 w-[75%] relative pb-4'>
         <label className='self-start font-normal'>{description}</label>
         {children}
      </fieldset>
   )
}

export default FieldSet

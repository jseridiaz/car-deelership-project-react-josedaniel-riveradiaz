import React from "react"
import { FieldSetType } from "../../utils/types"

const FieldSet: React.FC<FieldSetType> = ({
   description,
   children,
   cssProperties,
}) => {
   return (
      <fieldset
         className={`flex flex-col gap-1 ${
            cssProperties ? cssProperties : "w-[80%] sm:w-[30%]"
         } relative pb-4 items-center min-w-[154px]`}
      >
         <label className=' font-bold'>{description}</label>
         {children}
      </fieldset>
   )
}

export default FieldSet

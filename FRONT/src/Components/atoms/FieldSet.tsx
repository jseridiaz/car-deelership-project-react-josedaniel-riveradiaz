import React from "react"
import { FieldSetType } from "../../utils/types"

const FieldSet: React.FC<FieldSetType> = ({
   description,
   children,
   cssProperties,
   labelProperties,
}) => {
   return (
      <fieldset
         className={`flex flex-col gap-1 ${
            cssProperties ? cssProperties : "w-[80%] sm:w-[30%]"
         } relative pb-4 items-center min-w-[154px]`}
      >
         <label
            className={` font-bold  max-[500px]:mb-2 ${
               labelProperties ? labelProperties : "text-4xl lg:text-2xl"
            }`}
         >
            {description}
         </label>
         {children}
      </fieldset>
   )
}

export default FieldSet

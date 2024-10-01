import React from "react"
import { ParrafType } from "../../utils/types"

const H2SingleComponent: React.FC<ParrafType> = ({
   h2Text,
   cssProperties,
   children,
}) => {
   return (
      <div className={cssProperties}>
         <h2 className='text-4xl font-medium'>{h2Text}</h2>
         {children}
      </div>
   )
}

export default H2SingleComponent

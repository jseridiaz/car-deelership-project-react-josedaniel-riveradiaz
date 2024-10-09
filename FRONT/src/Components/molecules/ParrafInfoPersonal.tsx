import React from "react"
import { ParrafInfoPersonalType } from "../../utils/types"

const ParrafInfoPersonal: React.FC<ParrafInfoPersonalType> = ({
   firstPart,
   result,
}) => {
   return (
      <div className='flex p-3 justify-between b-blue-600'>
         <p>{firstPart}</p>
         <p>{result}</p>
      </div>
   )
}

export default ParrafInfoPersonal

import React from "react"
import { ParrafInfoPersonalType } from "../../utils/types"

const ParrafInfoPersonal: React.FC<ParrafInfoPersonalType> = ({
   children,
   result,
}) => {
   return (
      <div className='transition duration-400 flex p-2 justify-between bg-white font-bold  text-blue-800 rounded-lg text-2xl gap-4 hover:bg-slate-200'>
         {children}
         <p className='h-full text-black rounded-r-lg'>{result}</p>
      </div>
   )
}

export default ParrafInfoPersonal

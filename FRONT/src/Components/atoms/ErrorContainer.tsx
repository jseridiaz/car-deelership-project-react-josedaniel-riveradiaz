import React from "react"
import { ErrorContainerType } from "../../utils/types"

const ErrorContainer: React.FC<ErrorContainerType> = ({ children, errors }) => {
   return (
      <div
         className={`flex justify-center absolute ${
            errors === "pattern" ? "-bottom-8" : "-bottom-3"
         } w-full left-1/2 -translate-x-1/2 `}
      >
         <p role='alert' className='text-red-600 text-sm font-medium'>
            {children}
         </p>
      </div>
   )
}

export default ErrorContainer

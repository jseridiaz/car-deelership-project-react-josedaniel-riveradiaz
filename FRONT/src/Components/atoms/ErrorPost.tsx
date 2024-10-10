import { ErrorPostType } from "../../utils/types"

const ErrorPost: React.FC<ErrorPostType> = ({ error, children, className }) => {
   return (
      <p
         className={`text-red-600 font-medium  ${
            error ? "visible" : "invisible"
         } ${className}`}
      >
         {children}
      </p>
      // <p className={`${!typeError ? "invisible" : "visible"} text-red-600`}>
      //    {children}
      // </p>
   )
}

export default ErrorPost

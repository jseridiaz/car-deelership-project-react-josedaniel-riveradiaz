import { ErrorPostType } from "../../utils/types"

const ErrorPost: React.FC<ErrorPostType> = ({ error, children, className }) => {
   return (
      <p
         role='alert'
         className={`text-red-700 font-bold select-none  ${
            error ? "visible" : "invisible"
         } ${className}`}
      >
         {children}
      </p>
   )
}

export default ErrorPost

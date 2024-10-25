import { AiOutlineInfoCircle } from "react-icons/ai"
import { ToastType } from "../../utils/types"

const Toast: React.FC<ToastType> = ({ children, handle = true }) => {
   return (
      <div
         className={` flex fixed right-1/2 translate-x-1/2 z-40 content-center p-6 gap-2 justify-center mx-auto -bottom-16 rounded-t-lg ${
            handle ? "bg-green-400" : "bg-red-600"
         } animate-[toast_1s_ease-in-out_forwards] font-normal select-none text-lg`}
      >
         <AiOutlineInfoCircle className='absolute md:relative md:top-0 md:left-0 top-2 left-2 ' />
         {children}
      </div>
   )
}

export default Toast

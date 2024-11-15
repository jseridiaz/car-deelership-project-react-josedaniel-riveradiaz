import { createContext } from "react"
import useResize from "../customHooks/useResize"
import { ErrorContainerType, ResizeContextType } from "../../utils/types"

export const ResizeContext = createContext<ResizeContextType>({
   desktop: window.innerWidth >= 768 ? true : false,
   changeViewPort: () => {},
})
const GlobalResize = ({ children }: ErrorContainerType) => {
   const { desktop, changeViewPort } = useResize()

   return (
      <ResizeContext.Provider value={{ desktop, changeViewPort }}>
         {children}
      </ResizeContext.Provider>
   )
}

export default GlobalResize

import { createContext } from "react"
import useResize from "../customHooks/useResize"
import { ErrorContainerType, ResizeContextType } from "../../utils/types"

export const ResizeContext = createContext<ResizeContextType>({
   viewPort: window.innerWidth,
   desktop: window.innerWidth >= 768 ? true : false,
   changeViewPort: () => {},
})
const GlobalResize = ({ children }: ErrorContainerType) => {
   const { viewPort, desktop, changeViewPort } = useResize()

   return (
      <ResizeContext.Provider value={{ viewPort, desktop, changeViewPort }}>
         {children}
      </ResizeContext.Provider>
   )
}

export default GlobalResize

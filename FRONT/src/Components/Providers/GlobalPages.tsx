import { createContext, useState } from "react"
import { ErrorContainerType, GlobalCurrentPageType } from "../../utils/types"

export const CurrentPageContext = createContext<GlobalCurrentPageType>({
   currentPage: 1,
   setCurrentPage: newPage => newPage,
})
const GlobalCurrentPage = ({ children }: ErrorContainerType) => {
   const [currentPage, setCurrentPage] = useState<number>(1)
   return (
      <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
         {children}
      </CurrentPageContext.Provider>
   )
}

export default GlobalCurrentPage

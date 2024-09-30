import { createContext, useState } from "react"
import { ErrorContainerType, GlobalLoggedType } from "../../utils/types"
export const LoggedContext = createContext<GlobalLoggedType>({
   logged: null,
   setLogged: () => null,
})
const GlobalLogged = ({ children }: ErrorContainerType) => {
   const [logged, setLogged] = useState<string | null>(null)
   return (
      <LoggedContext.Provider value={{ logged, setLogged }}>
         {children}
      </LoggedContext.Provider>
   )
}

export default GlobalLogged

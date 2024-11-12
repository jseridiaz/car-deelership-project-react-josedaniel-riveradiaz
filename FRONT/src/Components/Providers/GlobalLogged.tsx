import { createContext, useState } from "react"
import { ErrorContainerType, GlobalLoggedType } from "../../utils/types"
export const LoggedContext = createContext<GlobalLoggedType>({
   logged: null,
   setLogged: () => null,
})
const GlobalLogged = ({ children }: ErrorContainerType) => {
   const [logged, setLogged] = useState<string | null>(
      localStorage.getItem("logged") ?? sessionStorage.getItem("logged"),
   )
   return (
      <LoggedContext.Provider value={{ logged, setLogged }}>
         {children}
      </LoggedContext.Provider>
   )
}

export default GlobalLogged

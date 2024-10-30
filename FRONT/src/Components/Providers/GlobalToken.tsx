import { createContext, useState } from "react"
import { ErrorContainerType, GlobalTokenType } from "../../utils/types"
export const TokenContext = createContext<GlobalTokenType>({
   token: localStorage.getItem("token") ?? sessionStorage.getItem("token"),
   setToken: () => null,
})
const GlobalToken = ({ children }: ErrorContainerType) => {
   const [token, setToken] = useState<string | null>(
      localStorage.getItem("token") ?? sessionStorage.getItem("token"),
   )
   return (
      <TokenContext.Provider value={{ token, setToken }}>
         {children}
      </TokenContext.Provider>
   )
}

export default GlobalToken

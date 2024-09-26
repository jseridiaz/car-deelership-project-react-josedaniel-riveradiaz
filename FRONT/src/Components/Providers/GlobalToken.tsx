import { createContext, useState } from "react"
import { ErrorContainerType, GlobalTokenType } from "../../utils/types"
export const TokenContext = createContext<GlobalTokenType>({
   token: null,
   setToken: () => null,
})
const GlobalToken = ({ children }: ErrorContainerType) => {
   const [token, setToken] = useState<string | null>(null)
   return (
      <TokenContext.Provider value={{ token, setToken }}>
         {children}
      </TokenContext.Provider>
   )
}

export default GlobalToken

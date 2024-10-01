import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import GlobalCarsContext from "./Components/Providers/GlobalCarsArray.tsx"
import GlobalCurrentPage from "./Components/Providers/GlobalPages.tsx"
import GlobalToken from "./Components/Providers/GlobalToken.tsx"
import GlobalLogged from "./Components/Providers/GlobalLogged.tsx"

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <BrowserRouter>
         <GlobalCarsContext>
            <GlobalCurrentPage>
               <GlobalToken>
                  <GlobalLogged>
                     <App />
                  </GlobalLogged>
               </GlobalToken>
            </GlobalCurrentPage>
         </GlobalCarsContext>
      </BrowserRouter>
   </StrictMode>,
)

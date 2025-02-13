import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import GlobalCarsContext from "./Components/Providers/GlobalCarsArray.tsx"
import GlobalCurrentPage from "./Components/Providers/GlobalPages.tsx"
import GlobalToken from "./Components/Providers/GlobalToken.tsx"
import GlobalLogged from "./Components/Providers/GlobalLogged.tsx"
import GlobalFavouritesArray from "./Components/Providers/GlobalFavouritesArray.tsx"
import { HelmetProvider } from "react-helmet-async"
import GlobalResize from "./Components/Providers/GlobalResize.tsx"

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <BrowserRouter>
         <HelmetProvider>
            <GlobalCarsContext>
               <GlobalCurrentPage>
                  <GlobalFavouritesArray>
                     <GlobalToken>
                        <GlobalLogged>
                           <GlobalResize>
                              <App />
                           </GlobalResize>
                        </GlobalLogged>
                     </GlobalToken>
                  </GlobalFavouritesArray>
               </GlobalCurrentPage>
            </GlobalCarsContext>
         </HelmetProvider>
      </BrowserRouter>
      ,
   </StrictMode>,
)

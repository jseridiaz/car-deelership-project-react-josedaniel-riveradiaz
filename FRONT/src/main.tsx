import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import GlobalCarsContext from "./Components/Providers/GlobalCarsArray.tsx"

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <BrowserRouter>
         <GlobalCarsContext>
            <App />
         </GlobalCarsContext>
      </BrowserRouter>
   </StrictMode>,
)

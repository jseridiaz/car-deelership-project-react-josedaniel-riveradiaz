import { Route, Routes } from "react-router-dom"
import "./App.css"
import Banner from "./Components/Banner"
import HeaderComponent from "./Components/HeaderComponent"
import NewCars from "./Page/NewCars"
import Home from "./Page/Home"
import FooterComponent from "./Components/FooterComponent"
import Login from "./Page/Login"
import Register from "./Page/Register"

function App() {
   return (
      <>
         <Banner color='max-w-[100svw] bg-red-500 dark:bg-black-900'>
            🛻 Oferta especial
         </Banner>
         <HeaderComponent></HeaderComponent>
         <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='new-cars-shop' element={<NewCars />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
         </Routes>
         <FooterComponent />
      </>
   )
}

export default App

import { Route, Routes } from "react-router-dom"
import "./App.css"
import Banner from "./Components/atoms/Banner"
import HeaderComponent from "./Components/HeaderComponent"
// import Home from "./Page/Home"
import FooterComponent from "./Components/FooterComponent"
// import Login from "./Page/Login"
// import Register from "./Page/Register"
// import CarPage from "./Page/CarPage"
// import About from "./Page/About"
// import FavouriteCars from "./Page/FavouriteCars"
// import InformationPersonal from "./Page/InformationPersonal"
// import PostAuto from "./Page/PostAuto"
import { lazy, Suspense } from "react"
import Loader from "./Components/atoms/Loader"
const Home = lazy(() => import("./Page/Home"))
const Login = lazy(() => import("./Page/Login"))
const Register = lazy(() => import("./Page/Register"))
const CarPage = lazy(() => import("./Page/CarPage"))
const About = lazy(() => import("./Page/About"))
const FavouriteCars = lazy(() => import("./Page/FavouriteCars"))
const InformationPersonal = lazy(() => import("./Page/InformationPersonal"))
const PostAuto = lazy(() => import("./Page/PostAuto"))

function App() {
   return (
      <>
         <Suspense fallback={<Loader></Loader>}>
            <Banner color='max-w-[100svw] bg-red-500 dark:bg-black-900'>
               Special offers
            </Banner>
            <HeaderComponent></HeaderComponent>
            <Routes>
               <Route index element={<Home />} />
               <Route path='/home' element={<Home />} />
               <Route path='/cars-shop' element={<CarPage />} />
               <Route path='/favourite-cars' element={<FavouriteCars />} />
               <Route path='/login' element={<Login />} />
               <Route path='/register' element={<Register />} />
               <Route path='/personal-info' element={<InformationPersonal />} />
               <Route path='/post-auto' element={<PostAuto />} />
               <Route path='/about-us' element={<About />} />
            </Routes>
            <FooterComponent />
         </Suspense>
      </>
   )
}

export default App

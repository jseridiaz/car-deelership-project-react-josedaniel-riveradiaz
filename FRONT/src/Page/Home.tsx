// import { HiOutlineChevronRight } from "react-icons/hi"
import { slides } from "../data/carouselSliders.json"
import Carousel from "../Components/molecules/Carousel"
import Brands from "../Components/molecules/Brands"

const Home = () => {
   console.log("../assets/Autobrands/audi-11-logo-svgrepo-com (1).svg")

   return (
      <>
         <section id='hero-section' className='relative w-full h-[80vh] '>
            <Carousel data={slides} />
            <Brands />
         </section>
      </>
   )
}

export default Home

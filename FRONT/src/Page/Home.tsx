// import { HiOutlineChevronRight } from "react-icons/hi"
import { slides } from "../data/carouselSliders.json"

import Carousel from "../Components/molecules/Carousel"

const Home = () => {
   return (
      <>
         {/* <HiOutlineChevronRight className='rounded-full stroke-[5px]  p-1 w-10 h-10 bg-slate-500 cursor-pointer' /> */}
         <section id='hero-section' className='relative w-screen h-[80vh] '>
            <Carousel data={slides} />
         </section>
      </>
   )
}

export default Home

// import { HiOutlineChevronRight } from "react-icons/hi"
import { slides } from "../data/carouselSliders.json"
import Carousel from "../Components/molecules/Home/Carousel"
import Brands from "../Components/molecules/Home/Brands"
import Explore from "../Components/molecules/Home/Explore"
import OurService from "../Components/molecules/Home/OurService"
import InfoAuto from "../Components/molecules/Home/InfoAuto"
import FeedbackCustomers from "../Components/molecules/Home/FeedbackCustomers"
import BlogsHome from "../Components/molecules/Home/BlogsHome"

const Home = () => {
   return (
      <>
         <Carousel data={slides} />
         <Brands />
         <Explore />
         <OurService />
         <InfoAuto
            title='EVs For Everyone'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ex consequuntur ea laborum maxime...'
         />
         <FeedbackCustomers />
         <BlogsHome />
      </>
   )
}

export default Home

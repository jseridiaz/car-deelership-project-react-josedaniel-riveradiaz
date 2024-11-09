// import { HiOutlineChevronRight } from "react-icons/hi"
import { slides } from "../data/carouselSliders.json"
import Carousel from "../Components/molecules/Home/Carousel"
import Brands from "../Components/molecules/Home/Brands"
import Explore from "../Components/molecules/Home/Explore"
import OurService from "../Components/molecules/Home/OurService"
import InfoAuto from "../Components/molecules/Home/InfoAuto"
import FeedbackCustomers from "../Components/molecules/Home/FeedbackCustomers"
import BlogsHome from "../Components/molecules/Home/BlogsHome"
import Seo from "../Components/molecules/Seo"

const Home = () => {
   return (
      <>
         <Seo
            title='Home - Car seller'
            description='✔️ Find out your desire car in our Auto page by looking for our stock with a good price and state. Enjoy with it thanks to the great offers that we throw out all weeks becouse.'
            url='https://carseller-for-you.vercel.app/home'
            img='/PorscheBlog.png'
         />
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

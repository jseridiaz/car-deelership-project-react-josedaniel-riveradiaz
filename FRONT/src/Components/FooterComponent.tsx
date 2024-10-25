import { BiChevronRight } from "react-icons/bi"
import { AiFillLinkedin, AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai"
import IconRRSS from "./molecules/IconRRSS"
import { dataFooter } from "../data/dataFooter"
import UlFooter from "./molecules/Home/UlFooter"
import { FacebookShareButton, TwitterShareButton } from "react-share"

const FooterComponent = () => {
   return (
      <>
         <footer className=' flex justify-around relative z-100 px-2 sm:px-10 pb -6 sm:pt-5 bg-gray-400 text-black flex-wrap gap-9'>
            <div className=' flex flex-col gap-5 w-[75%] mt-5 sm:mt-0 sm:w-1/4 min-w-[140px] border-black'>
               <h4 className='text-xl font-semibold'>Subscribe to the newsletter</h4>
               <form action='' className='relative flex items-center'>
                  <input
                     className='relative rounded-full p-3 w-full caret-blue-500 border-2 outline-none focus:border-red-600 placeholder-shown:text-sm text-sm hover:border-red-600'
                     placeholder='Enter your email'
                  />
                  <div>
                     <BiChevronRight className='absolute top-1/2 -translate-y-[50%] right-1 rounded-full bg-red-800 w-[35px] h-[35px] fill-white cursor-pointer' />
                  </div>
               </form>
               <div className='flex justify-evenly'>
                  <a
                     href='https://www.linkedin.com/in/josedanielriveradiaz/?locale=es_ES'
                     target='_blank'
                     referrerPolicy='no-referrer'
                  >
                     <IconRRSS hoverColor='hover:bg-blue-500'>
                        <AiFillLinkedin className='z-20 w-full h-full fill-blue-500 rounded-full p-0.5 cursor-pointer  ' />
                     </IconRRSS>
                  </a>
                  <FacebookShareButton
                     className='hover:outline-none  focus:outline-none'
                     url='https://carseller-for-you.vercel.app/home'
                  >
                     <IconRRSS hoverColor='hover:bg-blue-400'>
                        <AiFillFacebook className='z-20 w-full h-full fill-blue-400 rounded-full p-0.5 cursor-pointer' />
                     </IconRRSS>
                  </FacebookShareButton>
                  <TwitterShareButton
                     url='https://carseller-for-you.vercel.app/home'
                     className='hover:outline-none  focus:outline-none'
                  >
                     <IconRRSS hoverColor='hover:bg-cyan-400'>
                        <AiFillTwitterSquare className='z-20 w-full h-full fill-cyan-400 rounded-full p-0.5 stroke-white cursor-pointer ' />
                     </IconRRSS>
                  </TwitterShareButton>
               </div>
            </div>

            <div className='relative flex flex-wrap justify-around w-full sm:w-1/2 gap-6 left-0 sm:left-[10%]'>
               {dataFooter.map((el, idx) => (
                  <UlFooter key={idx} title={el.title} arrayLi={el.li} />
               ))}
            </div>
            <div></div>
         </footer>
      </>
   )
}

export default FooterComponent

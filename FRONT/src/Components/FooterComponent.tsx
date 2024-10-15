import { BiChevronRight } from "react-icons/bi"
import { AiFillLinkedin, AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai"
import IconRRSS from "./molecules/IconRRSS"
import { dataFooter } from "../data/dataFooter"
import UlFooter from "./molecules/Home/UlFooter"

const FooterComponent = () => {
   return (
      <>
         <footer className=' flex justify-around relative z-100 px-2 sm:px-10 sm:pt-5 bg-gray-400 text-black flex-wrap gap-9'>
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
                  <IconRRSS
                     hoverColor='hover:bg-blue-500'
                     componentName={
                        <AiFillLinkedin className='z-20 w-full h-full fill-blue-500 rounded-full p-0.5 cursor-pointer  ' />
                     }
                  />
                  <IconRRSS
                     hoverColor='hover:bg-blue-400'
                     componentName={
                        <AiFillFacebook className='z-20 w-full h-full fill-blue-400 rounded-full p-0.5 cursor-pointer ' />
                     }
                  />
                  <IconRRSS
                     hoverColor='hover:bg-cyan-400'
                     componentName={
                        <AiFillTwitterSquare className='z-20 w-full h-full fill-cyan-400 rounded-full p-0.5 stroke-white cursor-pointer ' />
                     }
                  />
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

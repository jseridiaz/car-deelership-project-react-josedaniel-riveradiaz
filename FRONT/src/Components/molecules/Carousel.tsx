import { HiChevronRight, HiChevronLeft } from "react-icons/hi"
import { BiChevronRight } from "react-icons/bi"
import Button from "../atoms/Button"
import { useState } from "react"
import BooleanState from "../customHooks/BooleanState"
type CarouselTypes = {
   data: {
      src: string
      alt: string
      brand: string
      cta: string
      specialChar?: string
   }[]
}
const Carousel: React.FC<CarouselTypes> = ({ data }) => {
   const [slide, setSlide] = useState<number>(1)
   const [value, setValue] = BooleanState()

   const handleClickRight = () => {
      if (slide === data.length) {
         setSlide(1)
         setValue()
      } else {
         setSlide(slide + 1)
         setValue()
      }
   }
   const handleClickLeft = () => {
      if (slide === 1) {
         setSlide(2)
      } else {
         setSlide(slide - 1)
      }
   }
   const handleClickBtn = (idx: number) => {
      setSlide(idx + 1)
   }
   return (
      <div className='box-border flex w-full h-[80svh]  gap-60 p-10 flex-wrap overflow-hidden bg-gradient-to-bl from-slate-200 to-blue-200 '>
         <HiChevronLeft
            className=' absolute transition duration-1000 cursor-pointer -translate-y-2/4 bg-blue-400	w-12 h-12 top-1/2  rounded-full left-4 z-20 hover:bg-blue-600'
            onClick={handleClickLeft}
         />
         {data.map((el, idx) => {
            return (
               <>
                  <div
                     className={`${
                        slide !== 1 ? idx == 0 && "hidden" : null
                     } relative h-full w-full`}
                  >
                     <span
                        className=' 
                       absolute
                        flex 
                        -top-[15%] 
                        -left-[25%] justify-center tracking-wider text-indigo-700 z-0 text-[12rem] select-none w-[100%] opacity-30 font-bold
                     '
                     >
                        {el.brand}
                     </span>
                     <div className=' flex flex-col items-center text-left gap-4 h-60 absolute w-[40%] top-[39%] left-[5%] '>
                        <h2 className='  font-extrabold text-shadow-lg text-[3.5rem] '>
                           {el.cta}
                           {el.specialChar ? (
                              <span className='font-extrabold  text-red-700 text-[3.5rem] ml-3'>
                                 {el.specialChar}
                              </span>
                           ) : null}
                        </h2>
                        <Button
                           text='Order now'
                           signal={
                              <BiChevronRight className='stroke-1 stroke-white ' />
                           }
                           ase='absolute transition duration-1000 hover:bg-blue-800 hover:shadow-blue-800 hover:scale-110 hover:shadow-lg bottom-0 w-fit justify-center items-center right-[30%] left-4
                           gap-1 text-[1rem] flex text-white font-semibold bg-black rounded-full p-2 px-4'
                        />
                     </div>
                     <img
                        key={idx}
                        className={`absolute top-[50%] -translate-y-[50%]  w-[52%] px-5 py-2  h-2/3 right-12 select-none ${
                           value ? "animate-[display_1s_ease-in-out_forwards]" : null
                        }`}
                        draggable={false}
                        src={el.src}
                        loading='lazy'
                        alt={el.alt}
                     />
                  </div>
               </>
            )
         })}
         <HiChevronRight
            className='absolute transition duration-1000 w-12 h-12 top-1/2 -translate-y-2/4 bg-blue-400  cursor-pointer rounded-full right-4 hover:bg-blue-700 '
            onClick={handleClickRight}
         />
         <div
            className='flex w-fit gap-2 bg-indigo-700 opacity-30 absolute rounded-full p-2 left-[50%] -translate-x-2/4 bottom-[2%] justify-center'
            id='btn-carousel'
         >
            {data.map((_, idx) => {
               return (
                  <div
                     key={idx}
                     className={`${
                        (slide === 1 && idx === 0) || (slide === 2 && idx === 1)
                           ? "bg-white "
                           : "bg-gray-700"
                     } w-4 h-4 cursor-pointer rounded-full border-none`}
                     onClick={() => handleClickBtn(idx)}
                  ></div>
               )
            })}
         </div>
      </div>
   )
}

export default Carousel

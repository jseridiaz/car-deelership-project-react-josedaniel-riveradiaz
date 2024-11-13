import { HiChevronRight, HiChevronLeft } from "react-icons/hi"
import { BiChevronRight } from "react-icons/bi"
import Button from "../../atoms/Button"
import BooleanState from "../../customHooks/BooleanState"
import ImgComponent from "../../atoms/ImgComponent"
import { memo, useState } from "react"
import ContainerColumn from "../../atoms/ContainerColumn"
import H2SingleComponent from "../../atoms/H2SingleComponent"
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
   const [slide, setSlide] = useState<number>(0)
   const [value, setValue] = BooleanState()

   const handleClickRight = () => {
      if (slide < 1) {
         setSlide(slide + 1)
         setValue()
      }
   }
   const handleClickLeft = () => {
      if (slide > 0) {
         setSlide(slide - 1)
         setValue()
      }
   }
   const handleClickBtn = (idx: number) => {
      setSlide(idx)
      setValue()
   }

   return (
      <section className=' box-border flex w-full  h-fit sm:p-6 lg:p-10 flex-wrap bg-gradient-to-b from-slate-200 to-blue-200'>
         <HiChevronLeft
            className={` absolute transition duration-1000 cursor-pointer -translate-y-2/4 bg-blue-400  w-12 h-12 sm:bottom-1/3 bottom-1/4   rounded-full left-4 z-20 hover:bg-blue-600  ${
               slide == 0 ? "hidden" : "block"
            }`}
            onClick={handleClickLeft}
         />

         <div
            className={`flex flex-wrap h-full justify-center sm:justify-between xl:justify-center items-center gap-4`}
         >
            <ContainerColumn className='relative items-center text-left gap-4 h-fit w-full sm:w-[42%] sm:left-6 left-0 '>
               <span
                  className=' 
                        flex  relative
                       tracking-wider text-indigo-700 z-0 text-[4rem] md:text-[6rem] lg:text-[9rem] select-none sm:w-[100%] opacity-30 font-bold justify-self-start  w-fit
                     '
               >
                  {data[slide].brand}
               </span>
               <H2SingleComponent cssProperties='relative font-extrabold text-center  w-full sm:text-left text-shadow-lg text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] sm:text-[2rem] left-0 sm:left-6 left-0 select-none '>
                  {data[slide].cta}
                  {data[slide].specialChar ? (
                     <span className='font-extrabold text-red-700 md:text-[2.5rem] lg:text-[3.5rem] ml-2 select-none'>
                        {data[slide].specialChar}
                     </span>
                  ) : null}
               </H2SingleComponent>
               <Button
                  signal={<BiChevronRight className='stroke-1 stroke-white' />}
                  link='/cars-shop'
                  properties=' transition duration-1000 hover:bg-blue-800 hover:shadow-blue-800 hover:scale-110 hover:shadow-lg w-fit justify-center sm:self-start self-center items-center gap-1 text-[1rem] flex text-white font-semibold bg-black rounded-full p-2 px-4'
                  isLink={true}
               >
                  Order now
               </Button>
            </ContainerColumn>
            <ImgComponent
               imgPath={data[slide].src}
               alt={data[slide].alt}
               classContainer={`relative aspect lg:top-8 top-1/5 xl:w-[55%] sm:w-[48%] sm:h-[300px] w-full h-[240px] min-w-[250px] right-0 lg:h-[70%]  select-none ${
                  value ? "animate-[display_600ms_ease-in-out_forwards]" : null
               }`}
               classImg='w-full h-full aspect-video object-contain sm:object-fill'
            />
         </div>
         <div className='w-full '>
            <div
               className=' mx-auto flex w-fit h-fit gap-2 bg-indigo-700 opacity-30 rounded-full p-2 justify-center items-center mt-6'
               id='btn-carousel'
            >
               {data.map((_, idx) => {
                  return (
                     <div
                        key={idx}
                        className={`${
                           (slide === 1 && idx === 1) || (slide === 0 && idx === 0)
                              ? "bg-white "
                              : "bg-gray-700"
                        } w-4 h-4 cursor-pointer rounded-full border-none`}
                        onClick={() => {
                           handleClickBtn(idx)
                        }}
                     ></div>
                  )
               })}
            </div>
         </div>
         <HiChevronRight
            className={`absolute transition duration-1000 w-12 h-12 sm:bottom-1/3 bottom-1/4 -translate-y-2/4 bg-blue-400  cursor-pointer rounded-full right-4 hover:bg-blue-700 ${
               slide == 1 ? "hidden" : "block"
            }`}
            onClick={handleClickRight}
         />
      </section>
   )
}

export default memo(Carousel)

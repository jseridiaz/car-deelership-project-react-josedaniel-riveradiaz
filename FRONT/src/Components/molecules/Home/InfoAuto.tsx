import { BiChevronRight } from "react-icons/bi"
import Button from "../../atoms/Button"
import ImgComponent from "../../atoms/ImgComponent"
interface InfoAutoType {
   title: string
   description: string
}
const InfoAuto: React.FC<InfoAutoType> = ({ title, description }) => {
   return (
      <section className='flex w-full h-fit p-10 relative bg-slate-100 items-center'>
         <ImgComponent
            imgPath='/JaguarHome.png'
            alt='Info-auto-home'
            classContainer=' z-10 translate-x-6 transition duration-700 h-fit rounded-3xl hover:brightness-110 '
         />
         <div className=' w-1/2 flex flex-col items-center gap-10 bg-white justify-center rounded-2xl h-[490px] -translate-x-2'>
            <h3 className='font-semibold text-2xl'>{title}</h3>
            <p className='font-normal w-2/3'>{description}</p>
            <Button
               link={"/about-us"}
               signal={<BiChevronRight className='stroke-1 stroke-white ' />}
               properties='relative
             	  transition duration-700 hover:bg-red-700 hover:shadow-md  w-fit justify-between items-center w-1/4
                           gap-1  flex text-white font-semibold bg-black rounded-full p-2 '
            >
               Read more
            </Button>
         </div>
      </section>
   )
}

export default InfoAuto

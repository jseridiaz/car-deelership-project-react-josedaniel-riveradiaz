import { BiChevronRight } from "react-icons/bi"
import Button from "./Button"
import ImgComponent from "./ImgComponent"
import ParrafAutoPicture from "./ParrafAutoPicture"

interface Cardautotype {
   autoName: string
   state: string
   year: number
   autoModel: string
   price: number
   imgPath: string
   km: number
}

const CardAutoHome: React.FC<Cardautotype> = ({
   autoName,
   state,
   year,
   autoModel,
   price,
   imgPath,
   km,
}) => {
   return (
      <li className='relative flex flex-col p-5 lg:w-2/5 h-full min-w-[370px] snap-center'>
         <ImgComponent
            imgPath={imgPath}
            alt={`${autoName}-${autoModel}`}
            classContainer='absolute  w-1/2 top-1/2 h-1/2 -translate-y-1/2 -left-1'
            classImg='w-full h-full object-fill'
         />

         <div className='flex flex-col bg-white justify-between h-fit w-[50%] self-end p-2 rounded-2xl'>
            <div className=' flex flex-col self-start mb-6'>
               <h3 className='font-semibold text-2xl'>{autoName}</h3>
               <span className={`relative text-lg ${state === "Usado" && "left-2"}`}>
                  {state}
               </span>
            </div>
            <div className='flex flex-col gap-5'>
               <ParrafAutoPicture el={year}>Model year:</ParrafAutoPicture>
               <ParrafAutoPicture el={`${autoModel}`}>Model: </ParrafAutoPicture>
               <ParrafAutoPicture
                  el={`${state === "Used" ? km.toLocaleString("es-ES") : 0}`}
               >
                  Kilometer:
               </ParrafAutoPicture>

               <ParrafAutoPicture el={`${price.toLocaleString("es-ES")} €`}>
                  Price:{" "}
               </ParrafAutoPicture>
               <Button
                  signal={<BiChevronRight className='stroke-1 stroke-white ' />}
                  properties='relative
             self-end transition duration-700 hover:bg-red-700 hover:shadow-blue-800 hover:shadow-md w-fit justify-between items-center w-full gap-1  flex text-white font-semibold bg-black rounded-full p-2 '
                  link='/cars-shop'
               >
                  Order now
               </Button>
            </div>
         </div>
      </li>
   )
}

export default CardAutoHome

import { BiChevronRight } from "react-icons/bi"
import Button from "./Button"
import ImgComponent from "./ImgComponent"

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
      <li className='relative flex flex-col p-5 w-2/5 h-full min-w-[33%] snap-center'>
         <ImgComponent
            imgPath={imgPath}
            alt={`${autoName}-${autoModel}`}
            classContainer='absolute  w-1/2 top-1/2 h-1/2 -translate-y-1/2 -left-1'
            classImg='w-full h-full object-fill'
         />

         <div className='flex flex-col bg-white justify-evenly h-fit w-[50%] self-end p-5 rounded-2xl'>
            <div className=' flex flex-col self-start mb-6'>
               <h3 className='font-semibold text-2xl'>{autoName}</h3>
               <span className={`relative text-lg ${state === "Usado" && "left-2"}`}>
                  {state}
               </span>
            </div>
            <div className='flex flex-col gap-5'>
               <p className='flex font-medium text-gray-400 justify-between'>
                  Model year: <span className='text-black'>{year}</span>
               </p>
               <p className='flex font-medium text-gray-400  justify-between'>
                  Model:<span className='text-black'>{autoModel}</span>{" "}
               </p>
               {state === "Used" && (
                  <p className='flex font-medium text-gray-400 justify-between'>
                     Kilometer:{" "}
                     <span className='text-black'>
                        {km.toLocaleString("es-ES")} km
                     </span>
                  </p>
               )}
               <p className='text-2xl font-semibold'>
                  {price.toLocaleString("es-ES")} €
               </p>
               <Button
                  signal={<BiChevronRight className='stroke-1 stroke-white ' />}
                  properties='relative
             self-end	  transition duration-700 hover:bg-red-700 hover:shadow-blue-800 hover:shadow-md  w-fit justify-between items-center w-full
                           gap-1  flex text-white font-semibold bg-black rounded-full p-2 '
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

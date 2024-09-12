import { BiChevronRight } from "react-icons/bi"
import Button from "./Button"

interface Cardautotype {
   autoName: string
   state: string
   year: number
   autoModel: string
   price: string
   imgPath: string
}

const CardAutoHome: React.FC<Cardautotype> = ({
   autoName,
   state,
   year,
   autoModel,
   price,
   imgPath,
}) => {
   return (
      <li className='relative flex flex-col p-5 w-2/5 h-full min-w-[33%] snap-center'>
         <img
            src={imgPath}
            alt='opel'
            loading='lazy'
            className='absolute w-1/2 top-1/2 -translate-y-1/2'
            draggable={false}
         />
         <div className='flex flex-col bg-white justify-evenly h-fit w-[50%] self-end p-5 rounded-2xl'>
            <div className=' flex flex-col self-start mb-6'>
               <h3 className='font-semibold text-2xl'>{autoName}</h3>
               <span className='text-lg'>{state}</span>
            </div>
            <div className='flex flex-col gap-5'>
               <p className='flex font-medium text-gray-400 justify-between'>
                  Model year: <span className='text-black'>{year}</span>
               </p>
               <p className='flex font-medium text-gray-400  justify-between'>
                  Model:<span className='text-black'>{autoModel}</span>{" "}
               </p>
               <p className='text-2xl font-semibold'>
                  {Number(price.slice(1)).toLocaleString("es-ES")} €
               </p>
               <Button
                  text='Order now'
                  signal={<BiChevronRight className='stroke-1 stroke-white ' />}
                  properties='relative
             self-end	  transition duration-700 hover:bg-red-700 hover:shadow-blue-800 hover:shadow-md  w-fit justify-between items-center w-full
                           gap-1  flex text-white font-semibold bg-black rounded-full p-2 '
               />
            </div>
         </div>
      </li>
   )
}

export default CardAutoHome

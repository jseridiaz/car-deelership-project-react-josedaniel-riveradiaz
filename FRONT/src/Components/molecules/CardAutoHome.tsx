import { BiChevronRight } from "react-icons/bi"
import Button from "../atoms/Button"
import ImgComponent from "../atoms/ImgComponent"
import ParrafAutoPicture from "../atoms/ParrafAutoPicture"
import { useNavigate } from "react-router-dom"
import globalFetch from "../../utils/functions/fetch/globalFetch"
import functionGetAutos from "../../utils/functions/functionGetAutos"
import getResponseJson from "../../utils/getResponseFetch"

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
   const navigate = useNavigate()

   const sendToAutoPage = () => {
      globalFetch(
         functionGetAutos({ availability: true, brand: autoName, model: autoModel }),
         { method: "GET" },
      )
         .then(res => getResponseJson(res))
         .then(res => {
            navigate("/cars-shop", {
               state: { brand: autoName, model: autoModel, allAutos: res },
            })
         })
   }
   return (
      <li className='relative flex flex-col p-2 sm:p-5  h-fit sm:min-w-[370px] min-w-[220px]  snap-center'>
         <ImgComponent
            imgPath={imgPath}
            alt={`${autoName}-${autoModel}`}
            classContainer=' relative sm:absolute sm:w-1/2 sm:top-1/2 sm:h-[70%] h-[150px] w-full sm:-translate-y-1/2 translate-y-0 sm:-left-1 left-0 sm:rounded-t-0 rounded-t-xl'
            classImg='w-full h-full sm:object-contain '
         />

         <div className='flex flex-col bg-white min-h-[336px] mx-auto  sm:mx-0 justify-between h-fit sm:w-[50%] w-full self-end p-1 sm:p-2 rounded-2xl'>
            <div className=' flex flex-col self-start mb-6'>
               <h3 className='font-semibold text-2xl'>{autoName}</h3>
               <span className={`relative text-lg ${state === "Usado" && "left-2"}`}>
                  {state}
               </span>
            </div>
            <div className='flex flex-col gap-5 '>
               <ParrafAutoPicture el={year}>Year:</ParrafAutoPicture>
               <ParrafAutoPicture el={`${autoModel}`}>Model: </ParrafAutoPicture>
               <ParrafAutoPicture
                  el={`${state === "Used" ? km.toLocaleString("es-ES") : 0}`}
               >
                  Kilometer:
               </ParrafAutoPicture>

               <ParrafAutoPicture el={`${price.toLocaleString("es-ES")} €`}>
                  Price:
               </ParrafAutoPicture>
               <Button
                  signal={<BiChevronRight className='stroke-1 stroke-white ' />}
                  properties='relative
             self-end transition duration-700 hover:bg-red-700 hover:shadow-blue-800 hover:shadow-md w-fit justify-between items-center w-full gap-1  flex text-white font-semibold bg-black sm:rounded-full rounded-xl p-2 '
                  functionClick={sendToAutoPage}
               >
                  Order now
               </Button>
            </div>
         </div>
      </li>
   )
}

export default CardAutoHome

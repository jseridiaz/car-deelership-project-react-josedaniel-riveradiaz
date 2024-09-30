import React from "react"
import { Link } from "react-router-dom"
import Button from "./Button"
import { ImgAutoType } from "../../utils/types"

const ImgAutos: React.FC<ImgAutoType> = ({
   idx,
   path,
   alt,
   brand,
   model,
   km,
   state,
   year,
   color,
   availavility,

   price,
}) => {
   return (
      <li
         key={idx}
         className='transition duration-1000 w-[300px] h-fit hover:shadow-2xl hover:scale-105 rounded-2xl'
      >
         <div className='overflow-hidden h-[250px] rounded-t-2xl'>
            <Link
               className='cursor-pointer overflow-hidden h-full relative'
               to={path}
               target='_blanket'
            >
               <img
                  src={path}
                  alt={alt}
                  className={`transition duration-1000 w-full h-full hover:scale-105 ${
                     availavility === "Disponible" ? "grayscale-0" : "grayscale"
                  }`}
                  loading='lazy'
               />
               {availavility === "Vendido" && (
                  <p className='absolute text-white font-semibold flex top-1/4   text-3xl w-full justify-center right-1/2'>
                     Selled
                  </p>
               )}
               {availavility === "Reservado" && (
                  <p className='absolute text-white font-semibold flex top-1/4   text-3xl justify-center right-1/2 w-full'>
                     Reserved
                  </p>
               )}
            </Link>
         </div>
         <div className='flex flex-col justify-between bg-blue-300 p-3 rounded-b-2xl'>
            <div className='flex justify-center flex-wrap gap-2 '>
               <p className='w-full text-left  bg-white rounded-md flex justify-between px-3'>
                  Brand: <span>{brand}</span>
               </p>
               <p className='w-full text-left  bg-white rounded-md flex justify-between px-3'>
                  Model: <span>{model}</span>
               </p>
               <p className='w-full text-left  bg-white rounded-md flex justify-between px-3'>
                  State: <span>{state}</span>
               </p>
               <p className='w-full text-left  bg-white rounded-md flex justify-between px-3'>
                  Year: <span>{year}</span>
               </p>
               <p className='w-full text-left  bg-white rounded-md flex justify-between px-3'>
                  Kilometers:<span>{km.toLocaleString("es-ES")} km</span>
               </p>
               <p className='w-full text-left  bg-white rounded-md flex justify-between px-3'>
                  Color: <span>{color}</span>
               </p>
               <p className='w-full text-left  bg-white rounded-md flex justify-between px-3'>
                  Price: <span>{price.toLocaleString("es-ES")}€</span>
               </p>
            </div>
            <div className=''>
               <Button properties='bg-white text-black mt-6' link={false}>
                  Order now
               </Button>
            </div>
         </div>
      </li>
   )
}

export default ImgAutos

import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Button from "./Button"
import { ImgAutoType, userID } from "../../utils/types"
import EmptyHeart from "./icons/Hearts/EmptyHeart"
import RedHeart from "./icons/Hearts/RedHeart"
import { FavouritesContext } from "../Providers/GlobalFavouritesArray"
import SvgBin from "./icons/SvgBin/SvgBin"
import ParrafAutoPicture from "./ParrafAutoPicture"
import ContainerColumn from "./ContainerColumn"
import { getStorage } from "../../utils/functions/storage/getStorage"

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
   autoId,
   customerId,
}) => {
   const { arrayFavourites, setArrayFavourites } = useContext(FavouritesContext)
   const idUser: string | null =
      localStorage.getItem("idUser") ?? sessionStorage.getItem("logged")

   const userInfo: userID = getStorage("userInfo")
   // useEffect(() => {
   //    fetch("http://localhost:3000/autos/v1/customer/user/" + idUser).then()
   // }, [idUser])
   const addFavourite = () => {
      if (customerId) {
         const arrayAdded = [...arrayFavourites, autoId]
         setArrayFavourites(prevArray => [...prevArray, autoId])
         localStorage.setItem("favourites", JSON.stringify(arrayAdded))
         fetch(
            `https://carseller-back-josedaniel.vercel.app/autos/v1/customer/idUser/${idUser}`,
            {
               method: "PUT",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify({ favourites: autoId }),
            },
         )
            .then(res => res.json())
            .then(res => {
               console.log(res)
            })
      }
   }
   const deleteFavourite = () => {
      if (customerId) {
         const filteredArray = arrayFavourites.filter(el => autoId !== el)
         setArrayFavourites(arrayFavourites.filter(el => autoId !== el))
         localStorage.setItem("favourites", JSON.stringify(filteredArray))
         fetch(
            `https://carseller-back-josedaniel.vercel.app/autos/v1/customer/delete/favourites/${customerId}`,
            {
               method: "PUT",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify({ favourites: autoId }),
            },
         )
            .then(res => res.json())
            .then(res => {
               console.log(res)
            })
      }
   }

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
               {customerId ? (
                  arrayFavourites.find(el => el === autoId) ? (
                     <RedHeart
                        className='transition duration-700 absolute z-100 right-2 top-1'
                        onClick={e => {
                           e.preventDefault()
                           deleteFavourite()
                        }}
                     ></RedHeart>
                  ) : (
                     <EmptyHeart
                        className='transition duration-700 absolute z-100 right-2 top-1 hover:scale-125'
                        onClick={e => {
                           e.preventDefault()
                           addFavourite()
                        }}
                     />
                  )
               ) : null}
               {userInfo?.rol === "admin" && <SvgBin idName={autoId} />}

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
            <ContainerColumn className='flex justify-center flex-wrap gap-2 '>
               {userInfo?.rol == "admin" && (
                  <ParrafAutoPicture el={autoId}>Id:</ParrafAutoPicture>
               )}
               <ParrafAutoPicture el={brand}>Brand:</ParrafAutoPicture>
               <ParrafAutoPicture el={model}>Model:</ParrafAutoPicture>
               <ParrafAutoPicture el={state}>State:</ParrafAutoPicture>
               <ParrafAutoPicture el={year}>Year:</ParrafAutoPicture>
               <ParrafAutoPicture el={`${km.toLocaleString("es-ES")} km`}>
                  Kilometers:
               </ParrafAutoPicture>
               <ParrafAutoPicture el={color}>Color:</ParrafAutoPicture>
               <ParrafAutoPicture el={`${price.toLocaleString("es-ES")}€`}>
                  Price:
               </ParrafAutoPicture>
            </ContainerColumn>
            <ContainerColumn className=''>
               <Button properties='bg-white text-black mt-6' isLink={false}>
                  Order now
               </Button>
            </ContainerColumn>
         </div>
      </li>
   )
}

export default ImgAutos

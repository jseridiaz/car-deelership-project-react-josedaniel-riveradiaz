import { useContext, memo } from "react"
import { Link } from "react-router-dom"
import { ImgAutoType, userID } from "../../utils/types"
import EmptyHeart from "../atoms/icons/Hearts/EmptyHeart"
import RedHeart from "../atoms/icons/Hearts/RedHeart"
import { FavouritesContext } from "../Providers/GlobalFavouritesArray"
import SvgBin from "../atoms/icons/SvgBin/SvgBin"
import ParrafAutoPicture from "../atoms/ParrafAutoPicture"
import ContainerColumn from "../atoms/ContainerColumn"
import { getStorage } from "../../utils/functions/storage/getStorage"
import ImgComponent from "../atoms/ImgComponent"
import globalFetch from "../../utils/functions/fetch/globalFetch"

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
   const userInfo: userID = getStorage("userInfo")

   const addFavouriteBBDD = async () => {
      if (customerId) {
         globalFetch(`/customer/${customerId}`, {
            method: "PUT",
            headers: true,
            data: { favourites: autoId },
         })
         const arrayAdded = [...arrayFavourites, autoId]
         localStorage.setItem("favourites", JSON.stringify(arrayAdded))
      }
   }

   const addFavouriteOptimist = () => {
      if (arrayFavourites) setArrayFavourites([...arrayFavourites, autoId])
   }
   const deleteFavourite = () => {
      if (customerId) {
         globalFetch(`/customer/delete/favourites/${customerId}`, {
            method: "PUT",
            headers: true,
            data: { favourites: autoId },
         }).then(() => {
            const filteredArray = arrayFavourites.filter(el => autoId !== el)
            setArrayFavourites(filteredArray)
            localStorage.setItem("favourites", JSON.stringify(filteredArray))
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
               <ImgComponent
                  imgPath={path}
                  alt={alt}
                  classContainer='h-full'
                  classImg={`transition duration-1000 w-full h-full hover:scale-105 ${
                     availavility === "Disponible" ? "grayscale-0" : "grayscale"
                  }`}
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
                           addFavouriteOptimist()
                           addFavouriteBBDD()
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
         </div>
      </li>
   )
}

export default memo(ImgAutos)

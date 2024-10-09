import { useContext, useEffect, useState } from "react"
import { FavouritesContext } from "../Components/Providers/GlobalFavouritesArray"
import ImgAutos from "../Components/atoms/ImgAutos"
import { AutoModelType } from "../utils/types"
import H2SingleComponent from "../Components/atoms/H2SingleComponent"
import Parraf from "../Components/molecules/Parraf"
import Button from "../Components/atoms/Button"

const FavouriteCars = () => {
   const { arrayFavourites, setArrayFavourites } = useContext(FavouritesContext)
   const [arrayToPrint, setArrayToPrint] = useState<AutoModelType[] | []>([])

   useEffect(() => {
      setArrayToPrint([])
      let array: AutoModelType[] | [] = []
      console.log(arrayFavourites, arrayToPrint, array)

      if (arrayFavourites) {
         for (let i = 0; i < arrayFavourites.length; i++) {
            const el = arrayFavourites[i]

            fetch(`http://localhost:3000/autos/v1/search/` + el)
               .then(res => res.json())
               .then(res => {
                  console.log(res.res)
                  array = [...array, res.res]
               })
               .then(() => setArrayToPrint(array))
         }
      }
      console.log(array)

      // console.log(arrayFavourites)
   }, [arrayFavourites])

   const clearFilter = () => {
      // setArrayToPrint([])
      setArrayFavourites([])
      localStorage.setItem("favourites", JSON.stringify([]))
   }
   return (
      <section className='h-full bg-blue-200 p-6'>
         <H2SingleComponent cssProperties='text-3xl font-bold bg-white rounded p-3 w-2/3 mx-auto shadow-lg'>
            All your favourites cars
         </H2SingleComponent>
         <ul
            className={` flex flex-wrap gap-5 w-full h-full justify-center p-4 my-6`}
         >
            {arrayToPrint.length ? (
               <>
                  {arrayToPrint.map((el, idx) => (
                     <ImgAutos
                        key={idx}
                        idx={idx}
                        path={el.picture[0]}
                        alt={`${el.brand}_${el.model}_${el.manufactureYear}_${el.color}`}
                        brand={el.brand}
                        state={el.state}
                        model={el.model}
                        km={el.kilometer}
                        availavility={el.availability}
                        year={el.manufactureYear}
                        price={el.price}
                        color={el.color}
                        autoId={el._id}
                        customerId={
                           localStorage.getItem("idUser") ??
                           sessionStorage.getItem("logged")
                        }
                     />
                  ))}
                  <div className='w-full'>
                     <Button
                        link={false}
                        properties='transition-all duration-900 border-none text-black cursor-pointer outline outline-4 outline-white bg-transparent hover:outline-blue-900 hover:font-bold hover:outline-4 hover:bg-slate-200'
                        functionClick={() => clearFilter()}
                     >
                        Clear all favourites
                     </Button>
                  </div>
               </>
            ) : (
               <Parraf cssProperties='h-fit mt-40 text-xl bg-black w-fit mx-auto text-white p-4 rounded-full font-medium pointer-events-none'>
                  There aren't autos on your favourite list
               </Parraf>
            )}
         </ul>
      </section>
   )
}

export default FavouriteCars
import { useContext, useEffect, useState } from "react"
import { FavouritesContext } from "../Components/Providers/GlobalFavouritesArray"
import ImgAutos from "../Components/atoms/ImgAutos"
import { AutoModelType } from "../utils/types"
import H2SingleComponent from "../Components/atoms/H2SingleComponent"
import Parraf from "../Components/molecules/Parraf"
import Button from "../Components/atoms/Button"
import { LoggedContext } from "../Components/Providers/GlobalLogged"
import Seo from "../Components/molecules/Seo"

const FavouriteCars = () => {
   const { logged } = useContext(LoggedContext)
   const idUser: string | null =
      localStorage.getItem("idUser") ?? sessionStorage.getItem("logged")
   const [customerId, setCustomerId] = useState<string | null>()
   const { arrayFavourites, setArrayFavourites } = useContext(FavouritesContext)
   const [arrayToPrint, setArrayToPrint] = useState<AutoModelType[] | []>([])
   useEffect(() => {
      fetch(
         `https://carseller-back-josedaniel.vercel.app/autos/v1/customer/user/${
            logged || idUser
         }`,
      )
         .then(res => res.json())
         .then(res => {
            return setCustomerId(res.res._id ?? null)
         })
   }, [idUser, logged])
   useEffect(() => {
      setArrayToPrint([])
      let array: AutoModelType[] | [] = []

      if (arrayFavourites) {
         for (let i = 0; i < arrayFavourites.length; i++) {
            const el = arrayFavourites[i]

            fetch(
               `https://carseller-back-josedaniel.vercel.app/autos/v1/search/` + el,
            )
               .then(res => res.json())
               .then(res => {
                  array = [...array, res.res]
               })
               .then(() => setArrayToPrint(array))
         }
      }
   }, [arrayFavourites])

   const clearFilter = () => {
      fetch(
         `https://carseller-back-josedaniel.vercel.app/autos/v1/customer/clear/favourites/${customerId}`,
         {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
         },
      )
      setArrayFavourites([])
      localStorage.setItem("favourites", JSON.stringify([]))
   }
   return (
      <>
         <Seo
            title='Check our your favourites 🛻 - Car seller'
            description="✔️ Take a see to the autos that you've saved and follow its availability. In case you decide to buy it than you can handle that easy at the moment."
            url='https://carseller-for-you.vercel.app/favourite-cars'
            img='/PorscheBlog.png'
         />
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
                           customerId={customerId}
                        />
                     ))}
                     <div className='w-full'>
                        <Button
                           isLink={false}
                           properties='transition-all duration-900 border-none text-black cursor-pointer outline outline-4 outline-white bg-transparent hover:outline-blue-900 hover:font-bold hover:outline-4 hover:bg-slate-200 mb-9'
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
      </>
   )
}

export default FavouriteCars

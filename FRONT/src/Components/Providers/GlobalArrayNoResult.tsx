import { createContext, useEffect, useState } from "react"
import {
   AutoModelType,
   ErrorContainerType,
   GlobalArrayNoResultType,
} from "../../utils/types"
import fetchGetAutos from "../../utils/functions/fetch/fetchGetAutos"

export const ContextNoResult = createContext<GlobalArrayNoResultType>({
   arrayNoResult: [],
   setArrayNoResult: () => {},
})

// const getArrayAsync = async () =>
//    await fetch(
//       `https://carseller-back-josedaniel.vercel.app/autos/v1/search?availability=Disponible&minPrice=0&maxPrice=9999999&minKm=0&maxKm=9999999&minYear=0&maxYear=9999999`,
//    )
//       .then(res => res.json())
//       .then(res => res.res)
const GlobalArrayNoResult = ({ children }: ErrorContainerType) => {
   const [arrayNoResult, setArrayNoResult] = useState<AutoModelType[] | []>([])
   const minQuantity = 0
   const maxQuantity = 99999999
   useEffect(() => {
      fetchGetAutos(
         true,
         "All",
         "All",
         "All",
         minQuantity,
         maxQuantity,
         minQuantity,
         maxQuantity,
         minQuantity,
         maxQuantity,
      ).then(res => {
         setArrayNoResult(res)
      })
   }, [])
   return (
      <ContextNoResult.Provider value={{ arrayNoResult, setArrayNoResult }}>
         {children}
      </ContextNoResult.Provider>
   )
}

export default GlobalArrayNoResult

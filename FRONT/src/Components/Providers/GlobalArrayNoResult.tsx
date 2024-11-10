import { createContext, useEffect, useState } from "react"
import {
   AutoModelType,
   ErrorContainerType,
   GlobalArrayNoResultType,
} from "../../utils/types"

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
   useEffect(() => {
      fetch(
         `https://carseller-back-josedaniel.vercel.app/autos/v1/search?availability=Disponible&minPrice=0&maxPrice=9999999&minKm=0&maxKm=9999999&minYear=0&maxYear=9999999`,
      )
         .then(res => res.json())
         .then(res => {
            setArrayNoResult(res.res)
         })
   }, [])
   return (
      <ContextNoResult.Provider value={{ arrayNoResult, setArrayNoResult }}>
         {children}
      </ContextNoResult.Provider>
   )
}

export default GlobalArrayNoResult

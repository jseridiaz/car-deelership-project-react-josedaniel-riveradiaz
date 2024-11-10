import { useContext, useReducer } from "react"
import { ActionFilterType, FilterComponentReducerType } from "../../utils/types"
import {
   FilterComponentReducer,
   INITIAL_STATE,
} from "./useReducer/FilterComponentReducer"
import { CarContext } from "../Providers/GlobalCarsArray"
import { CurrentPageContext } from "../Providers/GlobalPages"
import { getModels } from "../../utils/getModels"

export const useFilterCustom = () => {
   const [state, dispatch] = useReducer<
      React.Reducer<FilterComponentReducerType, ActionFilterType>
   >(FilterComponentReducer, INITIAL_STATE)
   const { setArrayAllCars } = useContext(CarContext)
   const { setCurrentPage } = useContext(CurrentPageContext)

   const filterFunction = (
      brand: string | null,
      model: string | null,
      chassis: string | null,
      availability: boolean,
      minPrice: number,
      maxPrice: number,
      minKm: number,
      maxKm: number,
      minYear: number,
      maxYear: number,
   ): void => {
      dispatch({ type: "setLoading", payload: true })

      if (brand === "All" && chassis === "All" && model === "All") {
         fetch(
            `https://carseller-back-josedaniel.vercel.app/autos/v1/search${
               availability ||
               minPrice ||
               maxPrice ||
               minKm ||
               minKm ||
               minYear ||
               maxYear
                  ? "?"
                  : ""
            }${availability ? "availability=Disponible" : ""}${
               minPrice ? `&minPrice=${minPrice}` : ""
            }${maxPrice ? `&maxPrice=${maxPrice}` : ""}${
               minKm ? `&minKm=${minKm}` : ""
            }${maxKm ? `&maxKm=${maxKm}` : ""}${
               minYear ? `&minYear=${minYear}` : ""
            }${maxYear ? `&maxYear=${maxYear}` : ""}`,
         )
            .then(res => res.json())
            .then(res => {
               dispatch({ type: "setModels", payload: getModels(res.res) })
               // setModels(getModels(res.res))
               setArrayAllCars(res.res)
               setCurrentPage(0)
               dispatch({ type: "setLoading", payload: false })

               if (!res.res.length) {
                  dispatch({ type: "setModels", payload: null })
                  dispatch({ type: "setLoading", payload: false })
               }
               return res.res
            })
            .then(res => {
               dispatch({ type: "setBrands", payload: res })
            })
      } else if (brand !== "All" && chassis === "All" && model === "All") {
         fetch(
            `https://carseller-back-josedaniel.vercel.app/autos/v1/search/brand/${brand}${
               availability ||
               minPrice ||
               maxPrice ||
               minKm ||
               minKm ||
               minYear ||
               maxYear
                  ? "?"
                  : ""
            }${availability ? "availability=Disponible" : ""}${
               minPrice ? `&minPrice=${minPrice}` : ""
            }${maxPrice ? `&maxPrice=${maxPrice}` : ""}${
               minKm ? `&minKm=${minKm}` : ""
            }${maxKm ? `&maxKm=${maxKm}` : ""}${
               minYear ? `&minYear=${minYear}` : ""
            }${maxYear ? `&maxYear=${maxYear}` : ""}`,
         )
            .then(res => res.json())
            .then(res => {
               const modelsArray = getModels(res.res)

               setArrayAllCars(res.res)
               setCurrentPage(0)
               dispatch({ type: "setModels", payload: modelsArray })
               dispatch({ type: "setLoading", payload: false })
            })
      } else if (brand === "All" && chassis === "All" && model !== "All") {
         fetch(
            `https://carseller-back-josedaniel.vercel.app/autos/v1/search/model/${model}${
               availability ||
               minPrice ||
               maxPrice ||
               minKm ||
               minKm ||
               minYear ||
               maxYear
                  ? "?"
                  : ""
            }${availability ? "availability=Disponible" : ""}${
               minPrice ? `&minPrice=${minPrice}` : ""
            }${maxPrice ? `&maxPrice=${maxPrice}` : ""}${
               minKm ? `&minKm=${minKm}` : ""
            }${maxKm ? `&maxKm=${maxKm}` : ""}${
               minYear ? `&minYear=${minYear}` : ""
            }${maxYear ? `&maxYear=${maxYear}` : ""}
         `,
         )
            .then(res => res.json())
            .then(res => {
               setArrayAllCars(res.res)
               setCurrentPage(0)
               dispatch({ type: "setLoading", payload: false })
            })
      } else if (brand === "All" && chassis !== "All" && model !== "All") {
         fetch(
            `https://carseller-back-josedaniel.vercel.app/autos/v1/search/query/category/model?category=${chassis}&model=${model}${
               availability ? "&availability=Disponible" : ""
            }${minPrice ? `&minPrice=${minPrice}` : ""}${
               maxPrice ? `&maxPrice=${maxPrice}` : ""
            }${minKm ? `&minKm=${minKm}` : ""}${maxKm ? `&maxKm=${maxKm}` : ""}${
               minYear ? `&minYear=${minYear}` : ""
            }${maxYear ? `&maxYear=${maxYear}` : ""}`,
         )
            .then(res => res.json())
            .then(res => {
               setArrayAllCars(res.res)
               setCurrentPage(0)
               dispatch({ type: "setLoading", payload: false })
            })
      } else if (chassis !== "All" && brand === "All" && model === "All") {
         fetch(
            `https://carseller-back-josedaniel.vercel.app/autos/v1/search/category/${chassis}${
               availability ||
               minPrice ||
               maxPrice ||
               minKm ||
               maxPrice ||
               minYear ||
               maxYear
                  ? "?"
                  : ""
            }${availability ? "&availability=Disponible" : ""}${
               minPrice ? `&minPrice=${minPrice}` : ""
            }${maxPrice ? `&maxPrice=${maxPrice}` : ""}${
               minKm ? `&minKm=${minKm}` : ""
            }${maxKm ? `&maxKm=${maxKm}` : ""}${
               minYear ? `&minYear=${minYear}` : ""
            }${maxYear ? `&maxYear=${maxYear}` : ""}`,
         )
            .then(res => res.json())
            .then(res => {
               const modelsArray = getModels(res.res)
               setArrayAllCars(res.res)
               setCurrentPage(0)
               dispatch({ type: "setModels", payload: modelsArray })
               dispatch({ type: "setLoading", payload: false })
            })
      } else if (chassis !== "All" && brand !== "All" && model === "All") {
         fetch(
            `https://carseller-back-josedaniel.vercel.app/autos/v1/search/query/brand/category?brand=${brand}&category=${chassis}${
               availability ? "&availability=Disponible" : ""
            }${minPrice ? `&minPrice=${minPrice}` : ""}${
               maxPrice ? `&maxPrice=${maxPrice}` : ""
            }${minKm ? `&minKm=${minKm}` : ""}${maxKm ? `&maxKm=${maxKm}` : ""}${
               minYear ? `&minYear=${minYear}` : ""
            }${maxYear ? `&maxYear=${maxYear}` : ""}`,
         )
            .then(res => res.json())
            .then(res => {
               if (!res.res.length) {
                  dispatch({ type: "setModels", payload: null })

                  // setModels(null)
               }
               setArrayAllCars(res.res)
               setCurrentPage(0)
               dispatch({ type: "setLoading", payload: false })

               const modelsArray = getModels(res.res)
               dispatch({ type: "setModels", payload: modelsArray })

               // setModels(modelsArray)
            })
      } else if (chassis === "All" && brand !== "All" && model !== "All") {
         fetch(
            `https://carseller-back-josedaniel.vercel.app/autos/v1/search/query/brand/model?brand=${brand}&model=${model}${
               availability ? "&availability=Disponible" : ""
            }${minPrice ? `&minPrice=${minPrice}` : ""}${
               maxPrice ? `&maxPrice=${maxPrice}` : ""
            }${minKm ? `&minKm=${minKm}` : ""}${maxKm ? `&maxKm=${maxKm}` : ""}${
               minYear ? `&minYear=${minYear}` : ""
            }${maxYear ? `&maxYear=${maxYear}` : ""}
         `,
         )
            .then(res => res.json())
            .then(res => {
               if (!res.res.length) {
                  dispatch({ type: "setModels", payload: null })
                  // setModels(null)
               }
               fetch(
                  `https://carseller-back-josedaniel.vercel.app/autos/v1/search/brand/${brand}`,
               )
                  .then(res => res.json())
                  .then(res => {
                     const modelsArray = getModels(res.res)
                     dispatch({ type: "setModels", payload: modelsArray })
                  })

               setArrayAllCars(res.res)
               setCurrentPage(0)
               dispatch({ type: "setLoading", payload: false })

               // const modelsArray = getModels(res.res)
               // setModels(modelsArray)
            })
      } else if (chassis !== "All" && model !== "All" && brand !== "All") {
         fetch(
            `https://carseller-back-josedaniel.vercel.app/autos/v1/search/query/brand/category/model?brand=${brand}&category=${chassis}&model=${model}${
               availability ? "&availability=Disponible" : ""
            }${minPrice ? `&minPrice=${minPrice}` : ""}${
               maxPrice ? `&maxPrice=${maxPrice}` : ""
            }${minKm ? `&minKm=${minKm}` : ""}${maxKm ? `&maxKm=${maxKm}` : ""}${
               minYear ? `&minYear=${minYear}` : ""
            }${maxYear ? `&maxYear=${maxYear}` : ""}`,
         )
            .then(res => res.json())
            .then(res => {
               setArrayAllCars(res.res)
               dispatch({ type: "setLoading", payload: false })

               setCurrentPage(0)
            })
      }
   }
   return { filterFunction, state, dispatch }
}

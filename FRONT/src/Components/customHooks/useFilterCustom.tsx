import { useCallback, useContext, useReducer } from "react"
import { ActionFilterType, FilterComponentReducerType } from "../../utils/types"
import {
   FilterComponentReducer,
   INITIAL_STATE,
} from "./useReducer/FilterComponentReducer"
import { CarContext } from "../Providers/GlobalCarsArray"
import { CurrentPageContext } from "../Providers/GlobalPages"
import { getModels } from "../../utils/getModels"
import fetchGetAutos from "../../utils/functions/fetch/fetchGetAutos"

export const useFilterCustom = () => {
   const [state, dispatch] = useReducer<
      React.Reducer<FilterComponentReducerType, ActionFilterType>
   >(FilterComponentReducer, INITIAL_STATE)
   const { setArrayAllCars } = useContext(CarContext)
   const { setCurrentPage } = useContext(CurrentPageContext)

   const filterFunction = useCallback(
      (
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
            fetchGetAutos(
               availability,
               brand,
               model,
               chassis,
               minPrice,
               maxPrice,
               minKm,
               maxKm,
               minYear,
               maxYear,
            )
               .then(res => {
                  dispatch({ type: "setModels", payload: getModels(res) })
                  // setModels(getModels(res.res))
                  setArrayAllCars(res)
                  setCurrentPage(0)
                  dispatch({ type: "setLoading", payload: false })
                  dispatch({ type: "setBrands", payload: res })

                  if (!res.length) {
                     dispatch({ type: "setModels", payload: null })
                     dispatch({ type: "setLoading", payload: false })
                  }
                  return res
               })
               .then(res => {
                  dispatch({ type: "setBrands", payload: res })
               })
         } else if (brand !== "All" && chassis === "All" && model === "All") {
            fetchGetAutos(
               availability,
               brand,
               model,
               chassis,
               minPrice,
               maxPrice,
               minKm,
               maxKm,
               minYear,
               maxYear,
            ).then(res => {
               const modelsArray = getModels(res)

               setArrayAllCars(res)
               setCurrentPage(0)
               dispatch({ type: "setModels", payload: modelsArray })
               dispatch({ type: "setLoading", payload: false })
            })
         } else if (brand === "All" && chassis === "All" && model !== "All") {
            fetchGetAutos(
               availability,
               brand,
               model,
               chassis,
               minPrice,
               maxPrice,
               minKm,
               maxKm,
               minYear,
               maxYear,
            ).then(res => {
               setArrayAllCars(res)
               setCurrentPage(0)
               dispatch({ type: "setLoading", payload: false })
            })
         } else if (brand === "All" && chassis !== "All" && model !== "All") {
            fetchGetAutos(
               availability,
               brand,
               model,
               chassis,
               minPrice,
               maxPrice,
               minKm,
               maxKm,
               minYear,
               maxYear,
            ).then(res => {
               if (!res.length) {
                  setArrayAllCars(res)
               }
               setArrayAllCars(res)
               setCurrentPage(0)
               dispatch({ type: "setLoading", payload: false })
            })
         } else if (chassis !== "All" && brand === "All" && model === "All") {
            fetchGetAutos(
               availability,
               brand,
               model,
               chassis,
               minPrice,
               maxPrice,
               minKm,
               maxKm,
               minYear,
               maxYear,
            ).then(res => {
               const modelsArray = getModels(res)
               setArrayAllCars(res)
               setCurrentPage(0)
               dispatch({ type: "setModels", payload: modelsArray })
               dispatch({ type: "setLoading", payload: false })
            })
         } else if (chassis !== "All" && brand !== "All" && model === "All") {
            fetchGetAutos(
               availability,
               brand,
               model,
               chassis,
               minPrice,
               maxPrice,
               minKm,
               maxKm,
               minYear,
               maxYear,
            ).then(res => {
               if (!res.length) {
                  dispatch({ type: "setModels", payload: null })

                  // setModels(null)
               }
               setArrayAllCars(res)
               setCurrentPage(0)
               dispatch({ type: "setLoading", payload: false })

               const modelsArray = getModels(res)
               dispatch({ type: "setModels", payload: modelsArray })
            })
         } else if (chassis === "All" && brand !== "All" && model !== "All") {
            fetchGetAutos(
               availability,
               brand,
               model,
               chassis,
               minPrice,
               maxPrice,
               minKm,
               maxKm,
               minYear,
               maxYear,
            ).then(res => {
               if (!res.length) {
                  fetchGetAutos(availability, brand).then(res => {
                     dispatch({ type: "setModels", payload: getModels(res) })
                  })
               }

               setArrayAllCars(res)
               setCurrentPage(0)
               dispatch({ type: "setLoading", payload: false })
            })
         } else if (chassis !== "All" && model !== "All" && brand !== "All") {
            fetchGetAutos(
               availability,
               brand,
               model,
               chassis,
               minPrice,
               maxPrice,
               minKm,
               maxKm,
               minYear,
               maxYear,
            ).then(res => {
               setArrayAllCars(res)
               dispatch({ type: "setLoading", payload: false })

               setCurrentPage(0)
            })
         }
      },
      [
         state.brand,
         state.chassis,
         state.model,
         state.availability,
         state.minPrice,
         state.maxPrice,
         state.minKm,
         state.maxKm,
         state.minYear,
         state.maxYear,
      ],
   )
   return { filterFunction, state, dispatch }
}

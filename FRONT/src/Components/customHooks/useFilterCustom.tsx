import { useCallback, useContext, useReducer, useState } from "react"
import {
   ActionFilterType,
   AutoModelType,
   FilterComponentReducerType,
} from "../../utils/types"
import {
   FilterComponentReducer,
   INITIAL_STATE,
} from "./useReducer/FilterComponentReducer"
import { CarContext } from "../Providers/GlobalCarsArray"
import { CurrentPageContext } from "../Providers/GlobalPages"
import { getModels } from "../../utils/getModels"
import globalFetch from "../../utils/functions/fetch/globalFetch"
import getResponseJson from "../../utils/getResponseFetch"
import functionGetAutos from "../../utils/functions/functionGetAutos"
import { useLocation } from "react-router-dom"

export const useFilterCustom = () => {
   const [state, dispatch] = useReducer<
      React.Reducer<FilterComponentReducerType, ActionFilterType>
   >(FilterComponentReducer, INITIAL_STATE)
   const { setArrayAllCars } = useContext(CarContext)
   const { setCurrentPage } = useContext(CurrentPageContext)
   const location = useLocation()
   const [stateUrl, setStateUrl] = useState<
      { brand: string; model: string; allAutos: AutoModelType[] } | undefined
   >(location.state)
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
         heightOfStartAutos: number,
      ): void => {
         dispatch({ type: "setLoading", payload: true })

         if (stateUrl) {
            setArrayAllCars(stateUrl.allAutos)
            window.scrollTo({ top: heightOfStartAutos })
            globalFetch(
               functionGetAutos({
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
               }),
               { method: "GET" },
            )
               .then(res => getResponseJson(res))
               .then(res => {
                  dispatch({ type: "setBrands", payload: res })
               })

            setStateUrl(undefined)
            setCurrentPage(0)
            dispatch({ type: "setLoading", payload: false })
         } else if (brand === "All" && chassis === "All" && model === "All") {
            globalFetch(
               functionGetAutos({
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
               }),
               {
                  method: "GET",
               },
            )
               .then(res => getResponseJson(res))
               .then(res => {
                  dispatch({ type: "setModels", payload: getModels(res) })
                  dispatch({ type: "setAvailableChassis", payload: res })
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
            globalFetch(
               functionGetAutos({
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
               }),
               { method: "GET" },
            )
               .then(res => getResponseJson(res))
               .then(res => {
                  const modelsArray = getModels(res)
                  dispatch({ type: "setAvailableChassis", payload: res })
                  setArrayAllCars(res)
                  setCurrentPage(0)
                  dispatch({ type: "setModels", payload: modelsArray })
                  dispatch({ type: "setLoading", payload: false })
               })
         } else if (brand === "All" && chassis === "All" && model !== "All") {
            globalFetch(
               functionGetAutos({
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
               }),
               { method: "GET" },
            )
               .then(res => getResponseJson(res))
               .then(res => {
                  // dispatch({ type: "setChassis", payload: res[0].type })
                  setArrayAllCars(res)
                  setCurrentPage(0)
                  // dispatch({ type: "setAvailableChassis", payload: res })
                  dispatch({ type: "setLoading", payload: false })
               })
         } else if (brand === "All" && chassis !== "All" && model !== "All") {
            globalFetch(
               functionGetAutos({
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
               }),
               { method: "GET" },
            )
               .then(res => getResponseJson(res))
               .then(res => {
                  setArrayAllCars(res)
                  setCurrentPage(0)
                  dispatch({ type: "setLoading", payload: false })
               })
         } else if (chassis !== "All" && brand === "All" && model === "All") {
            globalFetch(
               functionGetAutos({
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
               }),
               { method: "GET" },
            )
               .then(res => getResponseJson(res))
               .then(res => {
                  const modelsArray = getModels(res)
                  setArrayAllCars(res)
                  setCurrentPage(0)
                  dispatch({ type: "setModels", payload: modelsArray })
                  dispatch({ type: "setLoading", payload: false })
               })
         } else if (chassis !== "All" && brand !== "All" && model === "All") {
            globalFetch(
               functionGetAutos({
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
               }),
               { method: "GET" },
            )
               .then(res => getResponseJson(res))
               .then(res => {
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
            globalFetch(
               functionGetAutos({
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
               }),
               { method: "GET" },
            )
               .then(res => getResponseJson(res))
               .then(res => {
                  setArrayAllCars(res)
                  setCurrentPage(0)
                  dispatch({ type: "setLoading", payload: false })
               })
         } else if (chassis !== "All" && model !== "All" && brand !== "All") {
            globalFetch(
               functionGetAutos({
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
               }),
               { method: "GET" },
            )
               .then(res => getResponseJson(res))
               .then(res => {
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

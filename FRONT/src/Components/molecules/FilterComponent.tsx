import { useContext, useEffect, useReducer, useRef } from "react"
import FieldSet from "../atoms/FieldSet"
import { CarContext } from "../Providers/GlobalCarsArray"
import { getModels } from "../../utils/getModels"
import { CurrentPageContext } from "../Providers/GlobalPages"
import CheckBoxFilter from "../atoms/CheckBoxFilter"
import ContainerColumn from "../atoms/ContainerColumn"
import InputNumber from "./InputNumber"
import {
   FilterComponentReducer,
   INITIAL_STATE,
} from "../customHooks/useReducer/FilterComponentReducer"
import {
   ActionFilterType,
   ActionTypes,
   FilterComponentReducerType,
} from "../../utils/types"

// import Loader from "../atoms/Loader"

const FilterComponent = () => {
   const { setArrayAllCars } = useContext(CarContext)
   const { setCurrentPage } = useContext(CurrentPageContext)

   const selectedBrand = useRef<HTMLSelectElement>(null)
   const selectedChassis = useRef<HTMLSelectElement>(null)
   const selectedModel = useRef<HTMLSelectElement>(null)
   const availableSet = useRef<HTMLInputElement>(null)
   const selectedMinPrice = useRef<HTMLInputElement>(null)
   const selectedMaxPrice = useRef<HTMLInputElement>(null)
   const selectedMinKm = useRef<HTMLInputElement>(null)
   const selectedMaxKm = useRef<HTMLInputElement>(null)
   const selectedMinYear = useRef<HTMLInputElement>(null)
   const selectedMaxYear = useRef<HTMLInputElement>(null)

   const [state, dispatch] = useReducer<
      React.Reducer<FilterComponentReducerType, ActionFilterType>
   >(FilterComponentReducer, INITIAL_STATE)
   console.log(state.loading)

   const resetFilter = () => {
      dispatch({ type: "CLEAR" })
   }
   const handleChange = (
      value: React.MutableRefObject<HTMLInputElement | null>,
   ): void => {
      if (value.current)
         dispatch({ type: "setAvailability", payload: value.current.checked })
   }
   const handleKey = (e: React.KeyboardEvent) => {
      if (e.key == "-") {
         e.preventDefault()
      }
   }
   useEffect(() => {
      dispatch({ type: "setLoading", payload: true })
      fetch(
         `https://carseller-back-josedaniel.vercel.app/autos/v1/search${
            state.availability ? "?availability=Disponible" : ""
         }`,
         { headers: { "Cache-Control": "no-cache" } },
      )
         .then(res => res.json())
         .then(res => {
            setArrayAllCars(res.res)

            setCurrentPage(0)
            if (!res.res.length) {
               dispatch({ type: "setModels", payload: null })
               dispatch({ type: "setLoading", payload: false })
            }

            return res.res
         })
         .then(res => {
            dispatch({ type: "setBrands", payload: res })
            dispatch({ type: "setLoading", payload: false })
            // setBrands(getArrayBrands(res))
         })
   }, [])
   useEffect(() => {
      dispatch({ type: "setLoading", payload: true })
      if (
         state.brand === "All" &&
         state.chassis === "All" &&
         state.model === "All"
      ) {
         fetch(
            `https://carseller-back-josedaniel.vercel.app/autos/v1/search${
               state.availability ||
               state.minPrice ||
               state.maxPrice ||
               state.minKm ||
               state.minKm ||
               state.minYear ||
               state.maxYear
                  ? "?"
                  : ""
            }${state.availability ? "availability=Disponible" : ""}${
               state.minPrice ? `&minPrice=${state.minPrice}` : ""
            }${state.maxPrice ? `&maxPrice=${state.maxPrice}` : ""}${
               state.minKm ? `&minKm=${state.minKm}` : ""
            }${state.maxKm ? `&maxKm=${state.maxKm}` : ""}${
               state.minYear ? `&minYear=${state.minYear}` : ""
            }${state.maxYear ? `&maxYear=${state.maxYear}` : ""}`,
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
      } else if (
         state.brand !== "All" &&
         state.chassis === "All" &&
         state.model === "All"
      ) {
         fetch(
            `https://carseller-back-josedaniel.vercel.app/autos/v1/search/brand/${
               state.brand
            }${
               state.availability ||
               state.minPrice ||
               state.maxPrice ||
               state.minKm ||
               state.minKm ||
               state.minYear ||
               state.maxYear
                  ? "?"
                  : ""
            }${state.availability ? "availability=Disponible" : ""}${
               state.minPrice ? `&minPrice=${state.minPrice}` : ""
            }${state.maxPrice ? `&maxPrice=${state.maxPrice}` : ""}${
               state.minKm ? `&minKm=${state.minKm}` : ""
            }${state.maxKm ? `&maxKm=${state.maxKm}` : ""}${
               state.minYear ? `&minYear=${state.minYear}` : ""
            }${state.maxYear ? `&maxYear=${state.maxYear}` : ""}`,
         )
            .then(res => res.json())
            .then(res => {
               const modelsArray = getModels(res.res)

               setArrayAllCars(res.res)
               setCurrentPage(0)
               dispatch({ type: "setModels", payload: modelsArray })
               dispatch({ type: "setLoading", payload: false })
            })
      } else if (
         state.brand === "All" &&
         state.chassis === "All" &&
         state.model !== "All"
      ) {
         fetch(
            `https://carseller-back-josedaniel.vercel.app/autos/v1/search/model/${
               state.model
            }${
               state.availability ||
               state.minPrice ||
               state.maxPrice ||
               state.minKm ||
               state.minKm ||
               state.minYear ||
               state.maxYear
                  ? "?"
                  : ""
            }${state.availability ? "availability=Disponible" : ""}${
               state.minPrice ? `&minPrice=${state.minPrice}` : ""
            }${state.maxPrice ? `&maxPrice=${state.maxPrice}` : ""}${
               state.minKm ? `&minKm=${state.minKm}` : ""
            }${state.maxKm ? `&maxKm=${state.maxKm}` : ""}${
               state.minYear ? `&minYear=${state.minYear}` : ""
            }${state.maxYear ? `&maxYear=${state.maxYear}` : ""}
            `,
         )
            .then(res => res.json())
            .then(res => {
               setArrayAllCars(res.res)
               setCurrentPage(0)
               dispatch({ type: "setLoading", payload: false })
            })
      } else if (
         state.brand === "All" &&
         state.chassis !== "All" &&
         state.model !== "All"
      ) {
         fetch(
            `https://carseller-back-josedaniel.vercel.app/autos/v1/search/query/category/model?category=${
               state.chassis
            }&model=${state.model}${
               state.availability ? "&availability=Disponible" : ""
            }${state.minPrice ? `&minPrice=${state.minPrice}` : ""}${
               state.maxPrice ? `&maxPrice=${state.maxPrice}` : ""
            }${state.minKm ? `&minKm=${state.minKm}` : ""}${
               state.maxKm ? `&maxKm=${state.maxKm}` : ""
            }${state.minYear ? `&minYear=${state.minYear}` : ""}${
               state.maxYear ? `&maxYear=${state.maxYear}` : ""
            }`,
         )
            .then(res => res.json())
            .then(res => {
               setArrayAllCars(res.res)
               setCurrentPage(0)
               dispatch({ type: "setLoading", payload: false })
            })
      } else if (
         state.chassis !== "All" &&
         state.brand === "All" &&
         state.model === "All"
      ) {
         fetch(
            `https://carseller-back-josedaniel.vercel.app/autos/v1/search/category/${
               state.chassis
            }${
               state.availability ||
               state.minPrice ||
               state.maxPrice ||
               state.minKm ||
               state.maxPrice ||
               state.minYear ||
               state.maxYear
                  ? "?"
                  : ""
            }${state.availability ? "&availability=Disponible" : ""}${
               state.minPrice ? `&minPrice=${state.minPrice}` : ""
            }${state.maxPrice ? `&maxPrice=${state.maxPrice}` : ""}${
               state.minKm ? `&minKm=${state.minKm}` : ""
            }${state.maxKm ? `&maxKm=${state.maxKm}` : ""}${
               state.minYear ? `&minYear=${state.minYear}` : ""
            }${state.maxYear ? `&maxYear=${state.maxYear}` : ""}`,
         )
            .then(res => res.json())
            .then(res => {
               const modelsArray = getModels(res.res)
               setArrayAllCars(res.res)
               setCurrentPage(0)
               dispatch({ type: "setModels", payload: modelsArray })
               dispatch({ type: "setLoading", payload: false })
            })
      } else if (
         state.chassis !== "All" &&
         state.brand !== "All" &&
         state.model === "All"
      ) {
         fetch(
            `https://carseller-back-josedaniel.vercel.app/autos/v1/search/query/brand/category?brand=${
               state.brand
            }&category=${state.chassis}${
               state.availability ? "&availability=Disponible" : ""
            }${state.minPrice ? `&minPrice=${state.minPrice}` : ""}${
               state.maxPrice ? `&maxPrice=${state.maxPrice}` : ""
            }${state.minKm ? `&minKm=${state.minKm}` : ""}${
               state.maxKm ? `&maxKm=${state.maxKm}` : ""
            }${state.minYear ? `&minYear=${state.minYear}` : ""}${
               state.maxYear ? `&maxYear=${state.maxYear}` : ""
            }`,
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
      } else if (
         state.chassis === "All" &&
         state.brand !== "All" &&
         state.model !== "All"
      ) {
         fetch(
            `https://carseller-back-josedaniel.vercel.app/autos/v1/search/query/brand/model?brand=${
               state.brand
            }&model=${state.model}${
               state.availability ? "&availability=Disponible" : ""
            }${state.minPrice ? `&minPrice=${state.minPrice}` : ""}${
               state.maxPrice ? `&maxPrice=${state.maxPrice}` : ""
            }${state.minKm ? `&minKm=${state.minKm}` : ""}${
               state.maxKm ? `&maxKm=${state.maxKm}` : ""
            }${state.minYear ? `&minYear=${state.minYear}` : ""}${
               state.maxYear ? `&maxYear=${state.maxYear}` : ""
            }
            `,
         )
            .then(res => res.json())
            .then(res => {
               if (!res.res.length) {
                  dispatch({ type: "setModels", payload: null })
                  // setModels(null)
               }
               fetch(
                  `https://carseller-back-josedaniel.vercel.app/autos/v1/search/brand/${state.brand}`,
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
      } else if (
         state.chassis !== "All" &&
         state.model !== "All" &&
         state.brand !== "All"
      ) {
         fetch(
            `https://carseller-back-josedaniel.vercel.app/autos/v1/search/query/brand/category/model?brand=${
               state.brand
            }&category=${state.chassis}&model=${state.model}${
               state.availability ? "&availability=Disponible" : ""
            }${state.minPrice ? `&minPrice=${state.minPrice}` : ""}${
               state.maxPrice ? `&maxPrice=${state.maxPrice}` : ""
            }${state.minKm ? `&minKm=${state.minKm}` : ""}${
               state.maxKm ? `&maxKm=${state.maxKm}` : ""
            }${state.minYear ? `&minYear=${state.minYear}` : ""}${
               state.maxYear ? `&maxYear=${state.maxYear}` : ""
            }`,
         )
            .then(res => res.json())
            .then(res => {
               setArrayAllCars(res.res)
               dispatch({ type: "setLoading", payload: false })

               setCurrentPage(0)
            })
      } else {
         console.log("ok")
      }
   }, [
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
   ])

   const handleInput = (
      type: ActionTypes,
      reference: React.MutableRefObject<HTMLInputElement | null>,
   ): void => {
      if (reference && reference.current) {
         dispatch({ type, payload: parseInt(reference.current.value) })
      }
   }

   return (
      <>
         {state.loading && <div>dsadaddaas</div>}
         <div className='p-4'>
            <form className='flex justify-center flex-wrap gap-6 bg-blue-400 p-4 rounded-lg relative'>
               <FieldSet description='Brand'>
                  <select
                     className='lg:w-1/2 w-full'
                     ref={selectedBrand}
                     onChange={() => {
                        dispatch({
                           type: "setBrand",
                           payload:
                              selectedBrand.current && selectedBrand.current.value,
                        })
                        // changeValue(setBrand, selectedBrand)
                     }}
                  >
                     {state.brands &&
                        state.brands.map((el, idx) => (
                           <option
                              key={idx}
                              value={el === "Select a Brand" ? "All" : el}
                           >
                              {el}
                           </option>
                        ))}
                  </select>
               </FieldSet>
               <FieldSet description='Model'>
                  <select
                     className='lg:w-1/2 w-full'
                     ref={selectedModel}
                     onChange={() => {
                        dispatch({
                           type: "setModel",
                           payload:
                              selectedModel.current && selectedModel.current.value,
                        })
                        // changeValue(setModel, selectedModel)
                     }}
                  >
                     {!state.models?.length ? (
                        <option value='All'>Select Brand or chasis</option>
                     ) : (
                        <>
                           <option value='All'>All</option>
                           {state.models.map((el, idx) => (
                              <option key={idx}>{el}</option>
                           ))}
                        </>
                     )}
                  </select>
               </FieldSet>
               <FieldSet description='Chassis'>
                  <select
                     className='lg:w-1/2 w-full'
                     ref={selectedChassis}
                     value={state.chassis ? state.chassis : undefined}
                     onChange={() => {
                        dispatch({ type: "setModel", payload: "All" })
                        // setModel("All")
                        dispatch({
                           type: "setChassis",
                           payload:
                              selectedChassis.current &&
                              selectedChassis.current.value,
                        })

                        // changeValue(setChassis, selectedChassis)
                     }}
                  >
                     <option value='All'>All</option>
                     <option value='Turismo'>Cars</option>
                     <option value='SUV'>SUVs</option>
                     <option value='Truck'>Trucks</option>
                  </select>
               </FieldSet>
               <div className='flex justify-around w-full flex-wrap gap-6'>
                  <CheckBoxFilter
                     typeInput='checkbox'
                     idName='avaliables-autos'
                     reference={availableSet}
                     valueRef='available'
                     handleChange={() => handleChange(availableSet)}
                     checked={true}
                  >
                     Availables
                  </CheckBoxFilter>
                  <ContainerColumn className=' items-center w-full sm:w-fit sm:items-start '>
                     <ContainerColumn className='font-semibold text-center w-full'>
                        Price{" "}
                     </ContainerColumn>
                     <InputNumber
                        spanName='From'
                        idName='min-price-input'
                        numberValue='€'
                        reference={selectedMinPrice}
                        placeholder='1000'
                        handleKey={e => {
                           handleKey(e)
                        }}
                        handleInput={() => {
                           handleInput("setMinPrice", selectedMinPrice)
                        }}
                     />
                     <InputNumber
                        spanName='Under'
                        idName='max-price-input'
                        reference={selectedMaxPrice}
                        handleKey={e => handleKey(e)}
                        numberValue='€'
                        placeholder='20000'
                        handleInput={() => {
                           handleInput("setMaxPrice", selectedMaxPrice)
                        }}
                     />
                  </ContainerColumn>
                  <ContainerColumn className='items-center w-full sm:w-fit sm:items-start'>
                     <ContainerColumn className='flex font-semibold w-full'>
                        Kilometers
                     </ContainerColumn>
                     <InputNumber
                        spanName='From'
                        idName='min-km-input'
                        reference={selectedMinKm}
                        handleKey={e => handleKey(e)}
                        numberValue='Km'
                        handleInput={() => {
                           handleInput("setMinKm", selectedMinKm)
                        }}
                        placeholder='0'
                     />
                     <InputNumber
                        spanName='Unter'
                        idName='max-km-input'
                        reference={selectedMaxKm}
                        numberValue='Km'
                        handleKey={e => handleKey(e)}
                        handleInput={() => {
                           handleInput("setMaxKm", selectedMaxKm)
                        }}
                        placeholder='180000'
                     />
                  </ContainerColumn>
                  <ContainerColumn className='items-center w-full sm:w-fit sm:items-start'>
                     <ContainerColumn className='font-semibold w-full'>
                        Year manufacture
                     </ContainerColumn>
                     <InputNumber
                        spanName='From'
                        idName='year-manufacture-from'
                        reference={selectedMinYear}
                        handleKey={e => handleKey(e)}
                        handleInput={() => {
                           handleInput("setMinYear", selectedMinYear)
                        }}
                        placeholder='1992'
                     />
                     <InputNumber
                        spanName='Under'
                        idName='year-manufacture-under'
                        reference={selectedMaxYear}
                        placeholder='2024'
                        handleKey={e => handleKey(e)}
                        handleInput={() => {
                           handleInput("setMaxYear", selectedMaxYear)
                        }}
                     />
                  </ContainerColumn>
               </div>

               <div className='w-full'>
                  <button
                     className='bg-white lg:w-[10%] w-1/3 '
                     type='reset'
                     onClick={() => resetFilter()}
                  >
                     Clear filter
                  </button>
               </div>
            </form>

            <div className='absolute top-0 right-1/2 translate-x-1/2'>// // </div>
         </div>
      </>
   )
}

export default FilterComponent

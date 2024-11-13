import { useCallback, useEffect, useRef } from "react"
import FieldSet from "../atoms/FieldSet"
import debounce from "just-debounce-it"
import CheckBoxFilter from "../atoms/CheckBoxFilter"
import ContainerColumn from "../atoms/ContainerColumn"
import InputNumber from "../atoms/InputNumber"

import { ActionTypes } from "../../utils/types"
import Loader from "../atoms/Loader"
import Button from "../atoms/Button"
import { useFilterCustom } from "../customHooks/useFilterCustom"

const FilterComponent = () => {
   const { filterFunction, state, dispatch } = useFilterCustom()

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

   const resetFilter = () => {
      dispatch({ type: "CLEAR" })
      if (availableSet.current) availableSet.current.checked = true
   }
   const handleChange = (
      value: React.MutableRefObject<HTMLInputElement | null>,
   ): void => {
      if (value.current) {
         dispatch({ type: "setAvailability", payload: value.current.checked })
         dispatch({ type: "setModels", payload: state.models })
      }
   }
   const handleKey = (e: React.KeyboardEvent) => {
      if (e.key == "-") {
         e.preventDefault()
      }
   }

   useEffect(() => {
      filterFunction(
         state.brand,
         state.model,
         state.chassis,
         state.availability,
         state.minPrice,
         state.maxPrice,
         state.minKm,
         state.maxKm,
         state.minYear,
         state.maxYear,
      )
   }, [filterFunction])

   const handleInput = useCallback(
      debounce(
         (
            type: ActionTypes,
            reference: React.MutableRefObject<HTMLInputElement | null>,
         ): void => {
            if (reference && reference.current) {
               dispatch({ type, payload: parseInt(reference.current.value) })
            }
         },
         600,
      ),
      [
         state.maxKm,
         state.maxPrice,
         state.maxYear,
         state.minKm,
         state.minPrice,
         state.minYear,
      ],
   )

   return (
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
                           selectedChassis.current && selectedChassis.current.value,
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
                  idName='avaliables-autos'
                  reference={availableSet}
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

            <div className='w-full flex flex-col items-center gap-4'>
               <Button
                  properties='relative bg-white lg:w-[10%] w-1/3 '
                  type='reset'
                  functionClick={() => resetFilter()}
               >
                  Clear filter
                  {state.loading && <Loader properties='-bottom-6 left-12' />}
               </Button>
            </div>
         </form>
      </div>
   )
}

export default FilterComponent

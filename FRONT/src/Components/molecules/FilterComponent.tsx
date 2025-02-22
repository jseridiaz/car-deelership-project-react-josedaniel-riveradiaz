import { useContext, useEffect, useRef } from "react"
import FieldSet from "../atoms/FieldSet"
import CheckBoxFilter from "../atoms/CheckBoxFilter"
import ContainerColumn from "../atoms/ContainerColumn"

import Loader from "../atoms/Loader"
import Button from "../atoms/Button"
import { useFilterCustom } from "../customHooks/useFilterCustom"
import InputRange from "../atoms/InputRange"
import { ResizeContext } from "../Providers/GlobalResize"

const FilterComponent = () => {
   const { filterFunction, state, dispatch } = useFilterCustom()
   const { changeViewPort } = useContext(ResizeContext)

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
   const heightInScreenOfEndForm = useRef<HTMLDivElement>(null)

   useEffect(() => {
      changeViewPort()

      return () => {
         window.removeEventListener("resize", changeViewPort)
      }
   }, [window.innerWidth])
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
         heightInScreenOfEndForm.current?.["scrollHeight"] || 0,
      )
   }, [
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
      filterFunction,
   ])

   return (
      <div className='p-4' ref={heightInScreenOfEndForm}>
         <form className='relative flex justify-center flex-wrap gap-6 bg-blue-400 p-4 sm:px-16 px-8 rounded-lg relative'>
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
            <FieldSet description='Model' cssProperties=''>
               <select
                  className='lg:w-1/2 w-full'
                  ref={selectedModel}
                  onChange={() => {
                     dispatch({
                        type: "setModel",
                        payload:
                           selectedModel.current && selectedModel.current.value,
                     })
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
                     dispatch({
                        type: "setChassis",
                        payload:
                           selectedChassis.current && selectedChassis.current.value,
                     })
                  }}
               >
                  {state.availableChassis.map((el, index) => (
                     <option value={el.value} key={index}>
                        {el.description}
                     </option>
                  ))}
                  {/*                   
                  <option value='All'>All</option>
                  <option value='Turismo'>Cars</option>
                  <option value='SUV'>SUVs</option>
                  <option value='Truck'>Trucks</option> */}
               </select>
            </FieldSet>

            <div className='flex justify-around w-full flex-wrap gap-14'>
               <CheckBoxFilter
                  idName='avaliables-autos'
                  reference={availableSet}
                  handleChange={() => handleChange(availableSet)}
                  checked={true}
               >
                  Availables
               </CheckBoxFilter>
               <ContainerColumn className=' items-center w-full sm:w-fit sm:items-start '>
                  <ContainerColumn className={`font-semibold text-center w-full`}>
                     Price
                  </ContainerColumn>

                  <InputRange
                     idName='minprice-input'
                     defaultValue='0'
                     maxValue='50000'
                     minValue='0'
                     numberValue='€'
                     step='500'
                     reference={selectedMinPrice}
                     firstValue={0}
                     setValue={
                        (onchange = (): number =>
                           Number(selectedMinPrice.current?.value))
                     }
                     handleChange={() => {
                        if (selectedMinPrice.current)
                           dispatch({
                              type: "setMinPrice",
                              payload: Number(selectedMinPrice.current?.value),
                           })
                     }}
                  >
                     Min price
                  </InputRange>

                  <InputRange
                     idName='maxprice-input'
                     defaultValue='0'
                     maxValue='100000'
                     minValue='0'
                     numberValue='€'
                     step='1000'
                     reference={selectedMaxPrice}
                     firstValue={9999999}
                     setValue={
                        (onchange = (): number =>
                           Number(selectedMaxPrice.current?.value))
                     }
                     handleChange={() => {
                        if (selectedMaxPrice.current)
                           dispatch({
                              type: "setMaxPrice",
                              payload: Number(selectedMaxPrice.current?.value),
                           })
                     }}
                  >
                     Max price
                  </InputRange>
               </ContainerColumn>
               <ContainerColumn className='items-center w-full sm:w-fit sm:items-start'>
                  <ContainerColumn className='flex font-semibold w-full'>
                     Kilometers
                  </ContainerColumn>
                  <InputRange
                     idName='minkm-input'
                     defaultValue='0'
                     maxValue='100000'
                     minValue='0'
                     numberValue='km'
                     step='10000'
                     reference={selectedMinKm}
                     firstValue={0}
                     setValue={
                        (onchange = (): number =>
                           Number(selectedMinKm.current?.value))
                     }
                     handleChange={() => {
                        if (selectedMinKm.current)
                           dispatch({
                              type: "setMinKm",
                              payload: Number(selectedMinKm.current?.value),
                           })
                     }}
                  >
                     Min Km
                  </InputRange>

                  <InputRange
                     idName='maxkm-input'
                     defaultValue='0'
                     maxValue='100000'
                     minValue='0'
                     numberValue='km'
                     step='10000'
                     reference={selectedMaxKm}
                     firstValue={99999999}
                     setValue={
                        (onchange = (): number =>
                           Number(selectedMaxKm.current?.value))
                     }
                     handleChange={() => {
                        if (selectedMaxKm.current)
                           dispatch({
                              type: "setMaxKm",
                              payload: Number(selectedMaxKm.current?.value),
                           })
                     }}
                  >
                     Max Km
                  </InputRange>
               </ContainerColumn>
               <ContainerColumn className='items-center w-full sm:w-fit sm:items-start'>
                  <ContainerColumn className='font-semibold w-full'>
                     Year manufacture
                  </ContainerColumn>
                  <InputRange
                     idName='minYear-input'
                     defaultValue='1970'
                     maxValue='2024'
                     minValue='1970'
                     step='1'
                     numberValue=' '
                     reference={selectedMinYear}
                     firstValue={1970}
                     setValue={
                        (onchange = (): number =>
                           Number(selectedMinYear.current?.value))
                     }
                     handleChange={() => {
                        if (selectedMinYear.current)
                           dispatch({
                              type: "setMinYear",
                              payload: Number(selectedMinYear.current?.value),
                           })
                     }}
                  >
                     Min Year
                  </InputRange>

                  <InputRange
                     idName='minYear-input'
                     defaultValue='1970'
                     maxValue='2024'
                     minValue='1970'
                     step='1'
                     numberValue=' '
                     reference={selectedMaxYear}
                     firstValue={40000}
                     setValue={
                        (onchange = (): number =>
                           Number(selectedMaxYear.current?.value))
                     }
                     handleChange={() => {
                        if (selectedMaxYear.current)
                           dispatch({
                              type: "setMaxYear",
                              payload: Number(selectedMaxYear.current.value),
                           })
                     }}
                  >
                     Max Year
                  </InputRange>
               </ContainerColumn>
            </div>

            <div className='w-full flex flex-col items-center gap-4'>
               <Button
                  properties='relative bg-white lg:w-[10%] min-w-[140px]  '
                  type='reset'
                  functionClick={() => resetFilter()}
               >
                  Clear filter
               </Button>
            </div>
            {state.loading && (
               <Loader properties='-bottom-6 lg:right-[49%] min-[400px]right-[42%]' />
            )}
         </form>
      </div>
   )
}

export default FilterComponent

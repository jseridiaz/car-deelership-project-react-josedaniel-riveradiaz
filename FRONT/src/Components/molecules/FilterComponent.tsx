import { useContext, useEffect, useRef, useState } from "react"
import FieldSet from "../atoms/FieldSet"
import { getArrayBrands } from "../../utils/getArrayBrands"
import { CarContext } from "../Providers/GlobalCarsArray"
import { getModels } from "../../utils/getModels"
import { CurrentPageContext } from "../Providers/GlobalPages"
import CheckBoxFilter from "../atoms/CheckBoxFilter"
import ContainerColumn from "../atoms/ContainerColumn"
import InputNumber from "./InputNumber"

const FilterComponent = () => {
   const { arrayAllCars, setArrayAllCars } = useContext(CarContext)
   const { setCurrentPage } = useContext(CurrentPageContext)
   const maxQuantity = 999999999
   const minQuantity = 0

   const [brands, setBrands] = useState<string[] | null>(null)
   const [chassis, setChassis] = useState<string | null>("All")
   const [brand, setBrand] = useState<string | null>("All")
   const [models, setModels] = useState<string[] | null>(null)
   const [model, setModel] = useState<string | null>("All")
   const [availability, setAvailability] = useState<boolean>(true)
   const [minPrice, setMinPrice] = useState<number>(minQuantity)
   const [maxPrice, setMaxPrice] = useState<number>(maxQuantity)
   const [minKm, setMinKm] = useState<number>(minQuantity)
   const [maxKm, setMaxKm] = useState<number>(maxQuantity)
   const [minYear, setMinYear] = useState<number>(minQuantity)
   const [maxYear, setMaxYear] = useState<number>(maxQuantity)

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
      setBrand("All")
      setModel("All")
      setChassis("All")
      setCurrentPage(0)
      setAvailability(true)
      setMinPrice(minQuantity)
      setMaxPrice(maxQuantity)
      setMinKm(minQuantity)
      setMaxKm(maxQuantity)
      setMinYear(0)
      setMaxYear(99999)
   }
   const handleChange = (
      value: React.MutableRefObject<HTMLInputElement | null>,
   ): void => {
      if (value.current) setAvailability(value.current.checked)
      console.log(availableSet.current?.checked)
   }
   const handleKey = (e: React.KeyboardEvent) => {
      if (e.key == "-") {
         e.preventDefault()
      }
   }
   useEffect(() => {
      fetch(
         `http://localhost:3000/autos/v1/search${
            availability ? "?availability=Disponible" : ""
         }`,
      )
         .then(res => res.json())
         .then(res => {
            setArrayAllCars(res.res)
            setCurrentPage(0)
            if (!res.res.length) {
               setModels(null)
            }
            return res.res
         })
         .then(res => {
            setBrands(getArrayBrands(res))
         })
   }, [])
   useEffect(() => {
      if (brand === "All" && chassis === "All" && model === "All") {
         fetch(
            `http://localhost:3000/autos/v1/search${
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
               setModels(getModels(res.res))
               setArrayAllCars(res.res)
               setCurrentPage(0)

               if (!res.res.length) {
                  setModels(null)
               }
               return res.res
            })
            .then(res => {
               setBrands(getArrayBrands(res))
            })
      } else if (brand !== "All" && chassis === "All" && model === "All") {
         fetch(
            `http://localhost:3000/autos/v1/search/brand/${brand}${
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

               setModels(modelsArray)
               console.log(arrayAllCars)
            })
      } else if (brand === "All" && chassis === "All" && model !== "All") {
         fetch(
            `http://localhost:3000/autos/v1/search/model/${model}${
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
            })
      } else if (brand === "All" && chassis !== "All" && model !== "All") {
         fetch(
            `http://localhost:3000/autos/v1/search/query/category/model?category=${chassis}&model=${model}${
               availability ? "&availability=Disponible" : ""
            }${minPrice ? `&minPrice=${minPrice}` : ""}${
               maxPrice ? `&maxPrice=${maxPrice}` : ""
            }${minKm ? `&minKm=${minKm}` : ""}${maxKm ? `&maxKm=${maxKm}` : ""}${
               minYear ? `&minYear=${minYear}` : ""
            }${maxYear ? `&maxYear=${maxYear}` : ""}`,
         )
            .then(res => res.json())
            .then(res => {
               console.log(res.res)

               setArrayAllCars(res.res)
               setCurrentPage(0)
            })
      } else if (chassis !== "All" && brand === "All" && model === "All") {
         fetch(
            `http://localhost:3000/autos/v1/search/category/${chassis}${
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
               setModels(modelsArray)
               console.log(res.res)
            })
      } else if (chassis !== "All" && brand !== "All" && model === "All") {
         fetch(
            `http://localhost:3000/autos/v1/search/query/brand/category?brand=${brand}&category=${chassis}${
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
                  setModels(null)
               }
               setArrayAllCars(res.res)
               setCurrentPage(0)

               console.log(res.res)
               const modelsArray = getModels(res.res)
               setModels(modelsArray)
            })
      } else if (chassis === "All" && brand !== "All" && model !== "All") {
         fetch(
            `http://localhost:3000/autos/v1/search/query/brand/model?brand=${brand}&model=${model}${
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
                  setModels(null)
               }
               fetch(`http://localhost:3000/autos/v1/search/brand/${brand}`)
                  .then(res => res.json())
                  .then(res => {
                     const modelsArray = getModels(res.res)
                     setModels(modelsArray)
                  })

               setArrayAllCars(res.res)
               setCurrentPage(0)

               // const modelsArray = getModels(res.res)
               // setModels(modelsArray)
            })
      } else if (chassis !== "All" && model !== "All" && brand !== "All") {
         fetch(
            `http://localhost:3000/autos/v1/search/query/brand/category/model?brand=${brand}&category=${chassis}&model=${model}${
               availability ? "&availability=Disponible" : ""
            }${minPrice ? `&minPrice=${minPrice}` : ""}${
               maxPrice ? `&maxPrice=${maxPrice}` : ""
            }${minKm ? `&minKm=${minKm}` : ""}${maxKm ? `&maxKm=${maxKm}` : ""}${
               minYear ? `&minYear=${minYear}` : ""
            }${maxYear ? `&maxYear=${maxYear}` : ""}`,
         )
            .then(res => res.json())
            .then(res => {
               // if (!res.res.length) {
               //    fetch(
               //       `http://localhost:3000/autos/v1/search/query/brand/category?brand=${brand}&category=${chassis}`,
               //    )
               //       .then(res => res.json())
               //       .then(res => {
               //          const models = getModels(res.res)
               //          setArrayAllCars(res.res)
               //          setModels(models)
               //       })

               //    return
               // }
               setArrayAllCars(res.res)
               setCurrentPage(0)
            })
      } else {
         console.log("ok")
      }
   }, [
      brand,
      chassis,
      model,
      availability,
      minPrice,
      maxPrice,
      minKm,
      maxKm,
      minYear,
      maxYear,
   ])

   const changeValue = (
      setStateName: React.Dispatch<React.SetStateAction<string | null>>,
      reference: React.RefObject<HTMLSelectElement>,
   ): void => {
      setStateName(reference.current?.value ?? null)
   }
   const handleInput = (
      setState: React.Dispatch<React.SetStateAction<number | 0>>,
      reference: React.MutableRefObject<HTMLInputElement | null>,
   ): void => {
      if (reference && reference.current) {
         const numberValue: number = parseInt(reference.current?.value)
         setState(numberValue)
      }
   }

   return (
      <div className='p-4'>
         <form
            className='flex justify-center flex-wrap gap-6 bg-blue-400 p-4 rounded-lg'
            action=''
         >
            <FieldSet description='Brand'>
               <select
                  className='lg:w-1/2 w-full'
                  ref={selectedBrand}
                  onChange={() => {
                     changeValue(setBrand, selectedBrand)
                  }}
               >
                  {brands &&
                     brands.map((el, idx) => (
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
                     changeValue(setModel, selectedModel)
                  }}
               >
                  {!models?.length ? (
                     <option value='All'>Select Brand or chasis</option>
                  ) : (
                     <>
                        <option value='All'>All</option>
                        {models.map((el, idx) => (
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
                  value={chassis ? chassis : undefined}
                  onChange={() => {
                     setModel("All")
                     changeValue(setChassis, selectedChassis)
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
                     placeholder='1000€'
                     handleKey={e => {
                        handleKey(e)
                     }}
                     handleInput={() => {
                        handleInput(setMinPrice, selectedMinPrice)
                        console.log(minPrice)
                     }}
                  />
                  <InputNumber
                     spanName='Under'
                     idName='max-price-input'
                     reference={selectedMaxPrice}
                     numberValue='€'
                     placeholder='20000€'
                     handleInput={() => {
                        handleInput(setMaxPrice, selectedMaxPrice)
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
                     numberValue='Km'
                     handleInput={() => {
                        handleInput(setMinKm, selectedMinKm)
                     }}
                     placeholder='0'
                  />
                  <InputNumber
                     spanName='Unter'
                     idName='max-km-input'
                     reference={selectedMaxKm}
                     numberValue='Km'
                     handleInput={() => {
                        handleInput(setMaxKm, selectedMaxKm)
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
                     handleInput={() => {
                        handleInput(setMinYear, selectedMinYear)
                     }}
                     placeholder='1992'
                  />
                  <InputNumber
                     spanName='Under'
                     idName='year-manufacture-under'
                     reference={selectedMaxYear}
                     placeholder='2024'
                     handleInput={() => {
                        handleInput(setMaxYear, selectedMaxYear)
                     }}
                  />
               </ContainerColumn>
            </div>

            <div className='w-full'>
               <button
                  className='bg-white lg:w-[10%] w-1/3 '
                  type='reset'
                  onClick={resetFilter}
               >
                  Clear filter
               </button>
            </div>
         </form>
      </div>
   )
}

export default FilterComponent

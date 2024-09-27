import { useContext, useEffect, useRef, useState } from "react"
import FieldSet from "../atoms/FieldSet"
import { getArrayBrands } from "../../utils/getArrayBrands"
import { CarContext } from "../Providers/GlobalCarsArray"
import { getModels } from "../../utils/getModels"
import { CurrentPageContext } from "../Providers/GlobalPages"

const FilterComponent = () => {
   const { arrayAllCars, setArrayAllCars } = useContext(CarContext)
   const { currentPage, setCurrentPage } = useContext(CurrentPageContext)

   const [brands, setBrands] = useState<string[] | null>(null)
   const [chassis, setChassis] = useState<string | null>("All")
   const [brand, setBrand] = useState<string | null>("All")
   const [models, setModels] = useState<string[] | null>(null)
   const [model, setModel] = useState<string | null>("All")

   const selectedBrand = useRef<HTMLSelectElement>(null)
   const selectedChassis = useRef<HTMLSelectElement>(null)
   const selectedModel = useRef<HTMLSelectElement>(null)

   const resetFilter = () => {
      setBrand("All")
      setModel("All")
      setChassis("All")
      setCurrentPage(0)
   }
   useEffect(() => {
      fetch("http://localhost:3000/autos/v1/search")
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
         fetch("http://localhost:3000/autos/v1/search")
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
         fetch(`http://localhost:3000/autos/v1/search/brand/${brand}`)
            .then(res => res.json())
            .then(res => {
               const modelsArray = getModels(res.res)

               setArrayAllCars(res.res)
               setCurrentPage(0)

               setModels(modelsArray)
               console.log(arrayAllCars)
            })
      } else if (brand === "All" && chassis !== "All" && model !== "All") {
         fetch(
            `http://localhost:3000/autos/v1/search/query/category/model?category=${chassis}&model=${model}`,
         )
            .then(res => res.json())
            .then(res => {
               console.log(res.res)

               setArrayAllCars(res.res)
               setCurrentPage(0)
            })
      } else if (chassis !== "All" && brand === "All" && model === "All") {
         fetch("http://localhost:3000/autos/v1/search/category/" + chassis)
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
            `http://localhost:3000/autos/v1/search/query/brand/category?brand=${brand}&category=${chassis}`,
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
            `http://localhost:3000/autos/v1/search/query/brand/model?brand=${brand}&model=${model}`,
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
            `http://localhost:3000/autos/v1/search/query/brand/category/model?brand=${brand}&category=${chassis}&model=${model}`,
         )
            .then(res => res.json())
            .then(res => {
               if (!res.res.length) {
                  fetch(
                     `http://localhost:3000/autos/v1/search/query/brand/category?brand=${brand}&category=${chassis}`,
                  )
                     .then(res => res.json())
                     .then(res => {
                        const models = getModels(res.res)
                        setArrayAllCars(res.res)
                        setModels(models)
                     })

                  return
               }
               setArrayAllCars(res.res)
               setCurrentPage(0)

               console.log(arrayAllCars)
            })
      } else {
         console.log("ok")
      }
   }, [brand, chassis, model])

   const changeValue = (
      setStateName: React.Dispatch<React.SetStateAction<string | null>>,
      reference: React.RefObject<HTMLSelectElement>,
   ): void => {
      setStateName(reference.current?.value ?? null)
   }

   return (
      <div className='p-4'>
         <form className='flex justify-center flex-wrap gap-6' action=''>
            <FieldSet description='Brand'>
               <select
                  className='w-1/2'
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
                  className='w-1/2'
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
                  className='w-1/2'
                  ref={selectedChassis}
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
            <div className='w-full'>
               <button
                  className='bg-white w-[10%] '
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

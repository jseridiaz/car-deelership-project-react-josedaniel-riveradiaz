import { useContext, useEffect, useRef, useState } from "react"
import Button from "../atoms/Button"
import FieldSet from "../atoms/FieldSet"
import { getArrayBrands } from "../../utils/getArrayBrands"
import { CarContext } from "../Providers/GlobalCarsArray"
import { AutoModelType } from "../../utils/types"
import { getModels } from "../../utils/getModels"

const FilterComponent = () => {
   const { arrayAllCars, setArrayAllCars } = useContext(CarContext)

   const [brands, setBrands] = useState<string[] | null>(null)
   const [chassis, setChassis] = useState<string | null>(null)
   const [brand, setBrand] = useState<string | null>(null)
   const [models, setModels] = useState<string[] | null>(null)
   const selectedBrand = useRef<HTMLSelectElement>(null)
   const selectedChassis = useRef<HTMLSelectElement>(null)

   useEffect(() => {
      fetch("http://localhost:3000/autos/v1/search")
         .then(res => res.json())
         .then(res => {
            setArrayAllCars(res.res)
            return res.res
         })
         .then(res => {
            setBrands(getArrayBrands(res))
         })
   }, [])
   useEffect(() => {
      if (brand != null && chassis === null) {
         fetch(`http://localhost:3000/autos/v1/search/brand/${brand}`)
            .then(res => res.json())
            .then(res => {
               const modelsArray = getModels(res.res)
               setArrayAllCars(res.res)
               setModels(modelsArray)
               console.log(arrayAllCars)
            })
      } else if (chassis !== null && brand === null) {
         fetch("http://localhost:3000/autos/v1/search/category/" + chassis)
            .then(res => res.json())
            .then(res => {
               setArrayAllCars(res.res)
               console.log(res.res)
            })
      } else {
         console.log("ok")
      }
   }, [brand, chassis])

   const changeValue = (
      setStateName: React.Dispatch<React.SetStateAction<string | null>>,
      reference: React.RefObject<HTMLSelectElement>,
   ): void => {
      setStateName(reference.current?.value ?? null)
   }

   return (
      <div>
         <form className='flex justify-evenly' action=''>
            <FieldSet description='Brand'>
               <select
                  className='w-1/2'
                  ref={selectedBrand}
                  onChange={() => {
                     changeValue(setBrand, selectedBrand)
                  }}
               >
                  {brands &&
                     brands.map((el, idx) => <option key={idx}>{el}</option>)}
               </select>
            </FieldSet>
            <FieldSet description='Model'>
               <select className='w-1/2'>
                  {models === null ? (
                     <option value='select'>Select a brand or Chassis</option>
                  ) : (
                     models.map((el, idx) => <option key={idx}>{el}</option>)
                  )}
               </select>
            </FieldSet>
            <FieldSet description='Chassis'>
               <select
                  className='w-1/2'
                  ref={selectedChassis}
                  onChange={() => {
                     changeValue(setChassis, selectedChassis)
                  }}
               >
                  <option value='select'>Select a chassis</option>
                  <option value='Turismo'>Cars</option>
                  <option value='SUV'>SUVs</option>
                  <option value='Truck'>Trucks</option>
               </select>
            </FieldSet>
         </form>
         <Button properties='bg-blue-500' link={false}>
            Filter
         </Button>
      </div>
   )
}

export default FilterComponent

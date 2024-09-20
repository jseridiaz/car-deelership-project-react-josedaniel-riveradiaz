import { useContext } from "react"
import FilterComponent from "../Components/molecules/FilterComponent"
import PrintListAutos from "../Components/molecules/PrintListAutos"
import { CarContext } from "../Components/Providers/GlobalCarsArray"

const CarPage = () => {
   const { arrayAllCars, setArrayAllCars } = useContext(CarContext)
   return (
      <section className='bg-blue-200'>
         <FilterComponent />
         {arrayAllCars && (
            <PrintListAutos arrayToPRint={arrayAllCars} cssProperties='p-7 my-12' />
         )}
      </section>
   )
}

export default CarPage

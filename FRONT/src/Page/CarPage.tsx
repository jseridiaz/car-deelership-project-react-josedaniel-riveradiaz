import { useContext, useEffect, useState } from "react"
import FilterComponent from "../Components/molecules/FilterComponent"
import PrintListAutos from "../Components/molecules/PrintListAutos"
import { CarContext } from "../Components/Providers/GlobalCarsArray"
import Pagination from "../Components/molecules/Pagination"
import { CurrentPageContext } from "../Components/Providers/GlobalPages"
import Parraf from "../Components/molecules/Parraf"
// import Pagination from "../Components/molecules/Pagination"

const CarPage = () => {
   const { arrayAllCars, setArrayAllCars } = useContext(CarContext)
   const { currentPage, setCurrentPage } = useContext(CurrentPageContext)
   const productsPerPage: number = 8
   const [pages, setPages] = useState<number>(1)
   const firstIndex = 0 + productsPerPage * currentPage
   const lastIndex = productsPerPage * (currentPage + 1)

   useEffect(() => {
      if (arrayAllCars == undefined) {
         return
      }
      setPages(Math.ceil(arrayAllCars?.length / productsPerPage))
   }, [arrayAllCars])

   return (
      <section className={`bg-blue-200 ${!arrayAllCars?.length ? "h-screen " : ""}`}>
         <FilterComponent />
         {!arrayAllCars?.length ? (
            <Parraf cssProperties='mt-40 text-xl bg-black w-fit mx-auto text-white p-4 rounded-full font-medium pointer-events-none'>
               No results
            </Parraf>
         ) : (
            <>
               <Pagination
                  array={arrayAllCars}
                  allPages={pages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
               />
               <PrintListAutos
                  arrayToPRint={arrayAllCars.slice(firstIndex, lastIndex)}
                  cssProperties='p-7 my-12'
                  setArray={setArrayAllCars}
               />
               <Pagination
                  array={arrayAllCars}
                  allPages={pages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
               />
            </>
         )}
      </section>
   )
}

export default CarPage

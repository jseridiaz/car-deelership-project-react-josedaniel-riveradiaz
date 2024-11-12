import { useContext, useEffect, useState } from "react"
import FilterComponent from "../Components/molecules/FilterComponent"
import PrintListAutos from "../Components/molecules/PrintListAutos"
import { CarContext } from "../Components/Providers/GlobalCarsArray"
import Pagination from "../Components/molecules/Pagination"
import { CurrentPageContext } from "../Components/Providers/GlobalPages"
import Parraf from "../Components/molecules/Parraf"
import Seo from "../Components/molecules/Seo"
import { ContextNoResult } from "../Components/Providers/GlobalArrayNoResult"

const CarPage = () => {
   const { arrayAllCars } = useContext(CarContext)
   const { currentPage, setCurrentPage } = useContext(CurrentPageContext)
   const { arrayNoResult } = useContext(ContextNoResult)
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
      <>
         <Seo
            title="Auto stock - Car Seller's"
            description='✔️ Find all our current cars between all our brands and take a look at the pictures to compare with all your favourites choises. Choose between used and new autos, and buy one of them easily with your preferred Payment methods.'
            url={window.location.href}
            img='/PorscheBlog.png'
         />
         <section className={`bg-blue-200 `}>
            <FilterComponent />
            {!arrayAllCars?.length ? (
               <>
                  <Parraf cssProperties='mt-20 text-xl bg-black w-fit mx-auto text-white p-4 rounded-full font-medium pointer-events-none'>
                     No results
                  </Parraf>
                  <Parraf cssProperties='text-2xl mt-12 underline font-semibold'>
                     Some auto examples
                  </Parraf>
                  <PrintListAutos
                     arrayToPRint={arrayNoResult
                        .sort(() => Math.random() - 0.5)
                        .slice(firstIndex, lastIndex)}
                     cssProperties='p-7 my-12'
                  />
               </>
            ) : (
               <>
                  <PrintListAutos
                     arrayToPRint={arrayAllCars.slice(firstIndex, lastIndex)}
                     cssProperties='p-7 my-12'
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
      </>
   )
}

export default CarPage

import {
   Component,
   MutableRefObject,
   useContext,
   useEffect,
   useRef,
   useState,
} from "react"
import FilterComponent from "../Components/molecules/FilterComponent"
import PrintListAutos from "../Components/molecules/PrintListAutos"
import { CarContext } from "../Components/Providers/GlobalCarsArray"
import Pagination from "../Components/molecules/Pagination"
import { CurrentPageContext } from "../Components/Providers/GlobalPages"
import Parraf from "../Components/molecules/Parraf"
import Seo from "../Components/molecules/Seo"
import { AutoModelType } from "../utils/types"
import globalFetch from "../utils/functions/fetch/globalFetch"
import getResponseJson from "../utils/getResponseFetch"
import { useLocation } from "react-router-dom"
import { takeCurrentUrl } from "../utils/functions/Seo/takeCurrentUrl"

const CarPage = () => {
   const { arrayAllCars } = useContext(CarContext)
   const { currentPage, setCurrentPage } = useContext(CurrentPageContext)
   const [arrayNoResult, setArrayNoResult] = useState<AutoModelType[]>([])
   const location = useLocation()
   const stateAutosFormHome = location.state
   const productsPerPage: number = 8
   const [pages, setPages] = useState<number>(1)
   const firstIndex = 0 + productsPerPage * currentPage
   const lastIndex = productsPerPage * (currentPage + 1)
   const referenceForm = useRef<HTMLDivElement>(null)

   useEffect(() => {
      console.log(location)

      if (!stateAutosFormHome) {
         if (arrayAllCars?.length) {
            setPages(Math.ceil(arrayAllCars?.length / productsPerPage))
         } else {
            globalFetch(`/search/query?availability=Disponible`, { method: "GET" })
               .then(res => getResponseJson(res))
               .then(res => {
                  const resumeRes = res.sort(() => Math.random() - 0.5).slice(0, 4)
                  setArrayNoResult(resumeRes)
               })
         }
      }
   }, [arrayAllCars])

   return (
      <>
         <Seo
            title="Auto stock - Car Seller's"
            description='✔️ Find all our current cars between all our brands and take a look at the pictures to compare with all your favourites choises. Choose between used and new autos, and buy one of them easily with your preferred Payment methods.'
            url={takeCurrentUrl(location.pathname)}
            img='/PorscheBlog.png'
         />
         <section className={`bg-blue-200 `}>
            <div ref={referenceForm}>
               <FilterComponent />
            </div>
            {!arrayAllCars?.length ? (
               <>
                  <Parraf cssProperties='mt-20 text-xl bg-black w-fit mx-auto text-white p-4 rounded-full font-medium pointer-events-none'>
                     No results
                  </Parraf>
                  <Parraf cssProperties='text-2xl mt-12 underline font-semibold'>
                     Some auto examples
                  </Parraf>
                  <PrintListAutos
                     arrayToPRint={arrayNoResult}
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
                     allPages={pages}
                     currentPage={currentPage}
                     setCurrentPage={setCurrentPage}
                     referenceForm={referenceForm.current?.["scrollHeight"] || 0}
                  />
               </>
            )}
         </section>
      </>
   )
}

export default CarPage

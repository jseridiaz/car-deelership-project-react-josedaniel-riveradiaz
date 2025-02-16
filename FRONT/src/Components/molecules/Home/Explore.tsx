import { useEffect, useState } from "react"
import { optionFiltersHome } from "../../../data/optionFilters"
import H2Component from "../../atoms/H2Component"
import CardAutoHome from "../CardAutoHome"
import { AutoModelType, UserInfoType } from "../../../utils/types"
import { Link } from "react-router-dom"
import ContainerColumn from "../../atoms/ContainerColumn"
import { getStorage } from "../../../utils/functions/storage/getStorage"
import globalFetch from "../../../utils/functions/fetch/globalFetch"
import getResponseJson from "../../../utils/getResponseFetch"

const Explore = () => {
   const Favourite: UserInfoType | null = getStorage("userInfo")

   const [filterSelect, setFilterSelect] = useState<string>(
      Favourite?.favourites ?? "Cars",
   )
   const [arrayAutos, setArrayAutos] = useState<AutoModelType[] | []>([])

   const fetchData = (filterSelect: string) => {
      globalFetch(
         `/search/query?availability=Disponible&chassis=${
            filterSelect == "Cars"
               ? "Turismo"
               : filterSelect === "Trucks"
               ? "Truck"
               : "SUV"
         }`,
         {
            method: "GET",
         },
      )
         .then(res => getResponseJson(res))
         .then(res => {
            const finalArrayAuto: AutoModelType[] = []
            for (let i = 0; i < 6; i++) {
               const aleatoryNumber: number = Math.floor(Math.random() * res.length)
               const element: AutoModelType = res[aleatoryNumber]
               finalArrayAuto.push(element)
               res.splice(aleatoryNumber, 1)
            }
            setArrayAutos(finalArrayAuto)
         })
   }

   useEffect(() => {
      fetchData(filterSelect)
   }, [filterSelect])

   const handleFilter = (name: string): void => {
      setFilterSelect(name)
   }

   return (
      <section className='w-full sm:p-10 p-4 bg-blue-200  flex flex-col gap-9 justify-center items-center min-h-[700px]'>
         <div className='w-[100%] p-4 h-full bg-slate-50 relative '>
            <div className='w-full bg-slate-50 p-10 '>
               <H2Component>Explore</H2Component>
            </div>

            <div className='bg-slate-50 min-h-96 w-full '>
               <form
                  action=''
                  className='flex justify-center gap-6 sm:gap-12 flex-wrap p-4'
               >
                  {optionFiltersHome.map((el, idx) => (
                     <span
                        key={idx}
                        className={`transition duration-500 ${
                           filterSelect === el
                              ? "bg-red-300 font-semibold"
                              : "bg-white"
                        } font-medium px-4 py-2.5 rounded-3xl cursor-pointer hover:bg-red-300`}
                        onClick={() => handleFilter(el)}
                     >
                        {el}
                     </span>
                  ))}
               </form>
               <ul
                  id='scroll-hidden-home'
                  className='flex flex-nowrap
               overflow-x-scroll overflow-y-hidden snap-x h-full scroll-smooth sm:pb-0 pb-6'
               >
                  {arrayAutos?.map((el, idx) => (
                     <CardAutoHome
                        key={idx}
                        autoModel={el.model}
                        state={el.state}
                        year={el.manufactureYear}
                        price={el.price}
                        imgPath={el.picture[0]}
                        autoName={el.brand}
                        km={el.kilometer}
                     />
                  ))}
               </ul>
            </div>
            <ContainerColumn className='absolute left-1/2  p-2 w-1/2 sm:w-[35%] bottom-4 right-1/2 -translate-x-1/2 '>
               <Link
                  className=' absolute transition-all duration-800 text-white font-bold bg-blue-400 rounded-3xl p-3  cursor-pointer hover:bg-blue-600 hover:shadow-md w-full'
                  to='/cars-shop'
               >
                  See more Autos
               </Link>
            </ContainerColumn>
         </div>
      </section>
   )
}

export default Explore

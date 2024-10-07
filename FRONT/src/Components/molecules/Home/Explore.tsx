import { useContext, useEffect, useState } from "react"
import { optionFiltersHome } from "../../../data/optionFilters"
import H2Component from "../../atoms/H2Component"
import CardAutoHome from "../../atoms/CardAutoHome"
import { AutoModelType } from "../../../utils/types"
import { Link } from "react-router-dom"
import { LoggedContext } from "../../Providers/GlobalLogged"

const Explore = () => {
   const [idUser, setIdUser] = useState(
      localStorage.getItem("idUser") ?? sessionStorage.getItem("idUser"),
   )
   const { logged, setLogged } = useContext(LoggedContext)
   const [filterSelect, setFilterSelect] = useState<string>("Cars")
   const [arrayAutos, setArrayAutos] = useState<AutoModelType[]>([])

   useEffect(() => {
      if (idUser || logged) {
         fetch(`http://localhost:3000/autos/v1/user/${idUser ?? logged}`)
            .then(res => res.json())
            .then(res => {
               setFilterSelect(
                  res.res.favourites == "cars"
                     ? "Cars"
                     : res.res.favourites == "Truck"
                     ? "Trucks"
                     : "SUVs & Crossover",
               )
            })
      }
   }, [idUser, logged])
   useEffect(() => {
      const typeAuto = async () => {
         const data = await fetch(
            `http://localhost:3000/autos/v1/search/category/${
               filterSelect == "Cars"
                  ? "Turismo"
                  : filterSelect === "Trucks"
                  ? "Truck"
                  : "SUV"
            }`,
         )
            .then(res => res.json())
            .then(res => res.res)
            .then(res => {
               const finalArrayAuto: AutoModelType[] = []
               for (let i = 0; i < 4; i++) {
                  const aleatoryNumber: number = Math.floor(
                     Math.random() * res.length,
                  )
                  const element: AutoModelType = res[aleatoryNumber]
                  finalArrayAuto.push(element)
                  res.splice(aleatoryNumber, aleatoryNumber + 1)
               }
               setArrayAutos(finalArrayAuto)
            })
      }

      typeAuto()
   }, [filterSelect, idUser, logged])

   const handleFilter = (name: string): void => {
      setFilterSelect(name)
   }

   return (
      <section className='w-full p-10 bg-blue-200  flex flex-col gap-9 justify-center items-center h-[740px]'>
         <div className='w-[100%] p-4 h-full bg-slate-50 relative '>
            <div className='w-full bg-slate-50 p-10 '>
               <H2Component title='Explore' />
            </div>
            <div className='bg-slate-50 h-96 w-full '>
               <form action='' className='flex justify-center gap-16'>
                  {optionFiltersHome.map((el, idx) => (
                     <span
                        key={idx}
                        className={`transition duration-500 ${
                           filterSelect === el
                              ? "bg-red-300 font-semibold"
                              : "bg-white"
                        } font-medium px-4 py-2.5   rounded-3xl cursor-pointer hover:bg-red-300`}
                        onClick={() => handleFilter(el)}
                     >
                        {el}
                     </span>
                  ))}
               </form>
               <div
                  id='scroll-hidden-home'
                  className='flex flex-nowrap
               overflow-x-scroll snap-x h-full scroll-smooth'
               >
                  {arrayAutos.map((el, idx) => (
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
               </div>
            </div>
            <div className='absolute bottom-10 left-1/2 -translate-x-1/2 w-full p-2 '>
               <Link
                  className='transition-all duration-800 text-white font-bold bg-blue-400 rounded-3xl p-3 w-[80%] cursor-pointer hover:bg-blue-600'
                  to='/cars-shop'
               >
                  See more
               </Link>
            </div>
         </div>
      </section>
   )
}

export default Explore

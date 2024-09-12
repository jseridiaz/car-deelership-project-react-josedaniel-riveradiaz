import { useState } from "react"
import { optionFiltersHome } from "../../../data/optionFilters"
import H2Component from "../../atoms/H2Component"
import CardAutoHome from "../../atoms/CardAutoHome"

const Explore = () => {
   const [filterSelect, setFilterSelect] = useState<string>("Cars")
   const handleFilter = (name: string): void => {
      setFilterSelect(name)
   }
   return (
      <section className='w-full p-10 bg-blue-200  flex flex-col gap-9 justify-center items-center '>
         <div className='w-[100%] p-4'>
            <div className='w-full bg-slate-50 p-10 '>
               <H2Component title='Explore' />
            </div>
            <div className='bg-slate-50 h-96 w-full '>
               <form action='' className='flex justify-center gap-16'>
                  {optionFiltersHome.map((el, idx) => (
                     <span
                        key={idx}
                        className={`transition duration-500 ${
                           filterSelect === el && "bg-red-300 font-semibold"
                        } font-medium px-4 py-2.5 bg-white  rounded-3xl cursor-pointer hover:bg-red-300`}
                        onClick={() => handleFilter(el)}
                     >
                        {el}
                     </span>
                  ))}
               </form>
               <div
                  id='scroll-hidden-home'
                  className='flex flex-nowrap
               overflow-x-scroll snap-x scroll-smooth'
               >
                  <CardAutoHome
                     autoName='Opel'
                     state='new'
                     year={2020}
                     autoModel='Astra'
                     price='$20000'
                     imgPath='../../../../public/audi-portrait.webp'
                  />
                  <CardAutoHome
                     autoName='Opel'
                     state='new'
                     year={2020}
                     autoModel='Astra'
                     price='$20000'
                     imgPath='../../../../public/audi-portrait.webp'
                  />
                  <CardAutoHome
                     autoName='Opel'
                     state='new'
                     year={2020}
                     autoModel='Astra'
                     price='$20000'
                     imgPath='../../../../public/audi-portrait.webp'
                  />
                  <CardAutoHome
                     autoName='Opel'
                     state='new'
                     year={2020}
                     autoModel='Astra'
                     price='$20000'
                     imgPath='../../../../public/audi-portrait.webp'
                  />
               </div>
            </div>
         </div>
      </section>
   )
}

export default Explore

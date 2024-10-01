import { useEffect, useState } from "react"
import { PaginationTypes } from "../../utils/types"

const Pagination: React.FC<PaginationTypes> = ({
   allPages,
   currentPage,
   setCurrentPage,
}) => {
   const [arrayPages, setArrayPages] = useState<number[]>(
      Array.from({ length: allPages }, (v, i) => i + 1),
   )
   useEffect(() => {
      setArrayPages(Array.from({ length: allPages }, (v, i) => i + 1))
   }, [allPages])
   //  console.log(array)
   const handlePagination = (idx: number): void => {
      setCurrentPage(idx)
      console.log(currentPage)
   }
   const handleNext = () => {
      if (currentPage < arrayPages.length - 1) setCurrentPage(currentPage + 1)
      console.log(currentPage)
   }
   const handlePrevius = () => {
      if (currentPage > 0) setCurrentPage(currentPage - 1)
      console.log(currentPage)
   }

   return (
      <div className={`flex flex-wrap justify-center gap-4 mb-10 `}>
         <button
            className='transition duration-700 bg-white cursor-pointer font-semibold hover:bg-gray-400 hover:text-white'
            onClick={handlePrevius}
         >
            Previus
         </button>
         {arrayPages.map((el, idx) => (
            <button
               key={idx}
               className={` cursor-pointer font-semibold ${
                  idx + 1 === currentPage + 1 ? "bg-blue-900 text-white" : "bg-white"
               } `}
               onClick={() => {
                  handlePagination(idx)
               }}
            >
               {el}
            </button>
         ))}
         <button
            className='transition duration-700 bg-white cursor-pointer font-semibold hover:bg-gray-400 hover:text-white'
            onClick={handleNext}
         >
            Next
         </button>
      </div>
   )
}

export default Pagination

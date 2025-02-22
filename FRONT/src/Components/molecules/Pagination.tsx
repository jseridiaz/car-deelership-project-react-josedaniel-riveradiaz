import { useEffect, useState } from "react"
import { PaginationTypes } from "../../utils/types"
import Button from "../atoms/Button"

const Pagination: React.FC<PaginationTypes> = ({
   allPages,
   currentPage,
   setCurrentPage,
   referenceForm,
}) => {
   const [arrayPages, setArrayPages] = useState<number[]>(
      Array.from({ length: allPages }, (_, i) => i + 1),
   )

   useEffect(() => {
      setArrayPages(Array.from({ length: allPages }, (_, i) => i + 1))
   }, [allPages])
   const handlePagination = (idx: number): void => {
      if (idx + 1 === allPages) {
         scrollTo({ top: referenceForm })
         setCurrentPage(idx)
      } else {
         setCurrentPage(idx)
      }
   }
   const handleNext = () => {
      if (currentPage + 2 == arrayPages.length) {
         scrollTo({ top: referenceForm })
      }

      if (currentPage < arrayPages.length - 1) setCurrentPage(currentPage + 1)
   }
   const handlePrevius = () => {
      if (currentPage > 0) setCurrentPage(currentPage - 1)
   }

   return (
      <div
         className={`relative flex flex-wrap justify-center gap-1 mb-10  w-[80%] mx-auto `}
      >
         {arrayPages.map((el, idx) => (
            <Button
               key={idx}
               properties={` cursor-pointer font-medium text-sm md:text-xl px-3 py-1 ${
                  idx + 1 === currentPage + 1 ? "bg-blue-900 text-white" : "bg-white"
               } `}
               functionClick={() => {
                  handlePagination(idx)
               }}
               isLink={false}
            >
               {el}
            </Button>
         ))}
         <div className='flex justify-center w-full'>
            <div className='flex gap-2 justify-between w-[90%] '>
               <Button
                  properties={`min-w-[80px] px-3 py-1  transition duration-700 bg-white cursor-pointer font-medium hover:bg-gray-400 hover:text-white text-base lg:text-xl lg:self-center self-end ${
                     currentPage > 0 ? "visible" : "invisible"
                  }`}
                  functionClick={handlePrevius}
                  isLink={false}
               >
                  Previus
               </Button>

               <Button
                  properties={` min-w-[80px] transition duration-700 bg-white cursor-pointer font-medium hover:bg-gray-400 hover:text-white px-3 py-1 ${
                     currentPage < allPages - 1 ? "visible" : "invisible"
                  }`}
                  functionClick={handleNext}
                  isLink={false}
               >
                  Next
               </Button>
            </div>
         </div>
      </div>
   )
}

export default Pagination

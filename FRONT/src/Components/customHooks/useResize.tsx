import { useState } from "react"

const useResize = () => {
   const [desktop, setDesktop] = useState<boolean>(
      window.innerWidth >= 768 ? true : false,
   )

   const newViewPort = () => {
      if (window.innerWidth >= 768) {
         setDesktop(true)
      } else if (window.innerWidth < 768) {
         setDesktop(false)
      }
   }
   const changeViewPort = () => {
      addEventListener("resize", newViewPort)
   }

   return { desktop, setDesktop, changeViewPort }
}

export default useResize

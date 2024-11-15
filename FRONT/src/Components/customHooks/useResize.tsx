import { useState } from "react"

const useResize = () => {
   const [viewPort, setViewPort] = useState<number>(window.innerWidth)
   const [desktop, setDesktop] = useState<boolean>(
      window.innerWidth >= 768 ? true : false,
   )

   const newViewPort = () => {
      if (window.innerWidth >= 768) {
         setDesktop(true)
      } else if (window.innerWidth < 768) {
         setDesktop(false)
      }
      setViewPort(window.innerWidth)
   }
   const changeViewPort = () => {
      addEventListener("resize", newViewPort)
   }

   return { desktop, setDesktop, changeViewPort, viewPort }
}

export default useResize

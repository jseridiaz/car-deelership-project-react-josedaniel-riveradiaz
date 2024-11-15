import { useState } from "react"

const useResize = () => {
   const [viewPort, setViewPort] = useState<number>(window.innerWidth)
   const [desktop, setDesktop] = useState<boolean>(
      window.innerWidth >= 768 ? true : false,
   )

   const newViewPort = () => {
      // console.log(viewPort)
      // console.log(desktop)

      setViewPort(window.innerWidth)
      if (window.innerWidth >= 768) {
         setDesktop(true)
      } else if (window.innerWidth < 768) {
         setDesktop(false)
      }
   }
   const changeViewPort = () => {
      addEventListener("resize", newViewPort)
   }

   return { viewPort, desktop, changeViewPort }
}

export default useResize

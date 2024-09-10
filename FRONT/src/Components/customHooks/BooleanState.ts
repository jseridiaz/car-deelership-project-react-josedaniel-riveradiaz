import { useState } from "react"

const BooleanState = (): [boolean, () => void] => {
   const [value, setValue] = useState(true)

   const changeValue = (): void => {
      setValue(!value)
      setTimeout(() => {
         setValue(!value)
      }, 50)
   }
   return [value, changeValue]
}

export default BooleanState

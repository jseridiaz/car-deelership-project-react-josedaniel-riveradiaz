import { useState } from "react"

const BooleanState = (): [boolean, () => void] => {
   const [value, setValue] = useState<boolean>(true)

   const changeValue = (): void => {
      setValue(false)

      setTimeout(() => {
         setValue(true)
      }, 0.1)
   }
   return [value, changeValue]
}

export default BooleanState

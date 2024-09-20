import { createContext, useState } from "react"
import { AutoModelType, CarContextType, ErrorContainerType } from "../../utils/types"

export const CarContext = createContext<CarContextType>({
   arrayAllCars: [],
   setArrayAllCars: () => {},
})
const GlobalCarsContext = ({ children }: ErrorContainerType) => {
   const [arrayAllCars, setArrayAllCars] = useState<AutoModelType[] | null | []>([])

   return (
      <CarContext.Provider value={{ arrayAllCars, setArrayAllCars }}>
         {children}
      </CarContext.Provider>
   )
}

export default GlobalCarsContext

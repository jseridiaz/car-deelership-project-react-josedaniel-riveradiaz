import { AutoModelType } from "./types"

export const getArrayBrands = (array: AutoModelType[]) => {
   const arrayFirstFilter = array.map(el => el.brand)
   const arraySecondFilter = new Set(arrayFirstFilter)
   const arrayLastFilter = [...arraySecondFilter].sort((a, b) => a.localeCompare(b))

   return ["Select a Brand", ...arrayLastFilter]
}
// export getAllModels=()=>{

// }

import { AutoModelType } from "./types"

export const getArrayBrands = (array: AutoModelType[]): string[] => {
   const arrayFirstFilter = array.map(el => el.brand)
   console.log(arrayFirstFilter)

   const arraySecondFilter = new Set(arrayFirstFilter)

   const arrayLastFilter = [...arraySecondFilter].sort((a, b) => a.localeCompare(b))
   console.log(arrayLastFilter)

   return ["Select a Brand", ...arrayLastFilter]
}

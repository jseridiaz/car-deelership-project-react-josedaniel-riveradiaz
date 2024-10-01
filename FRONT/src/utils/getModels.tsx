import { AutoModelType } from "./types"

export const getModels = (array: AutoModelType[]) => {
   const arrayModels = array.map(el => el.model)
   const deleteDuplicates = new Set(arrayModels)
   return [...deleteDuplicates].sort((a, b) => a.localeCompare(b))
}

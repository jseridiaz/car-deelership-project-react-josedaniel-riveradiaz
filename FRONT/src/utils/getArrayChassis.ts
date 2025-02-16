import { AutoModelType, AvailableChassisType } from "./types"

const getArrayChassis = (array: AutoModelType[]): AvailableChassisType[] => {
   const filterByChassis = array.map(el => ({
      value: el.type,
      description:
         el.type == "Turismo" ? "Cars" : el.type == "Truck" ? "Trucks" : "SUVs",
   }))

   const arrayWithoutDuplicates: AvailableChassisType[] = []
   for (const el of filterByChassis) {
      if (!arrayWithoutDuplicates.some(item => el.description == item.description)) {
         arrayWithoutDuplicates.push(el)
      }
   }

   return [{ value: "All", description: "All" }, ...arrayWithoutDuplicates]
}
export default getArrayChassis

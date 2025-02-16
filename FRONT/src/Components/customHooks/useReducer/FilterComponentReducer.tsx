import { getArrayBrands } from "../../../utils/getArrayBrands"
import getArrayChassis from "../../../utils/getArrayChassis"
// import getArrayChassis from "../../../utils/getArrayChassis"
import { ActionFilterType, FilterComponentReducerType } from "../../../utils/types"

const maxQuantity = 99999999
const minQuantity = 0

export const INITIAL_STATE: FilterComponentReducerType = {
   brands: null,
   chassis: "All",
   brand: "All",
   availableChassis: [
      { value: "All", description: "All" },
      { value: "Turismo", description: "Cars" },
      { value: "SUV", description: "SUVs" },
      { value: "Truck", description: "Trucks" },
   ],
   models: null,
   model: "All",
   availability: true,
   minPrice: minQuantity,
   maxPrice: maxQuantity,
   minKm: minQuantity,
   maxKm: maxQuantity,
   minYear: minQuantity,
   maxYear: maxQuantity,
   loading: true,
   viewPort: window.innerWidth,
}

export const FilterComponentReducer = (
   state: FilterComponentReducerType = INITIAL_STATE,
   action: ActionFilterType,
) => {
   switch (action.type) {
      case "setBrands":
         return { ...state, brands: getArrayBrands(action.payload) }
      case "setChassis":
         return { ...state, chassis: action.payload }
      case "setBrand":
         return { ...state, brand: action.payload }
      case "setAvailableChassis":
         return { ...state, availableChassis: getArrayChassis(action.payload) }
      case "setModel":
         return { ...state, model: action.payload }
      case "setModels":
         return { ...state, models: action.payload }
      case "setAvailability":
         return { ...state, availability: action.payload }
      case "setMinPrice":
         return { ...state, minPrice: action.payload }
      case "setMaxPrice":
         return { ...state, maxPrice: action.payload }
      case "setMinKm":
         return { ...state, minKm: action.payload }
      case "setMaxKm":
         return { ...state, maxKm: action.payload }
      case "setMinYear":
         return { ...state, minYear: action.payload }
      case "setMaxYear":
         return { ...state, maxYear: action.payload }
      case "setLoading":
         return { ...state, loading: action.payload }
      case "setViewPort":
         return { ...state, viewPort: action.payload }
      case "CLEAR":
         return {
            ...state,
            chassis: "All",
            brand: "All",
            models: null,
            model: "All",
            availability: true,
            minPrice: minQuantity,
            maxPrice: maxQuantity,
            minKm: minQuantity,
            maxKm: maxQuantity,
            minYear: minQuantity,
            maxYear: maxQuantity,
         }
   }
}

import { FunctionGetAutosTypes } from "../types"

const functionGetAutos = ({
   availability,
   brand,
   model,
   chassis,
   minPrice,
   maxPrice,
   minKm,
   maxKm,
   minYear,
   maxYear,
}: FunctionGetAutosTypes): string =>
   `${"/search/query?"}${availability ? "availability=Disponible" : ""}${
      brand && brand != "All" ? `&brand=${brand}` : ""
   }${model && model != "All" ? `&model=${model}` : ""}${
      chassis && chassis != "All" ? `&chassis=${chassis}` : ""
   }${minPrice ? `&minPrice=${minPrice}` : ""}${
      maxPrice ? `&maxPrice=${maxPrice}` : ""
   }${minKm ? `&minKm=${minKm}` : ""}${maxKm ? `&maxKm=${maxKm}` : ""}${
      minYear ? `&minYear=${minYear}` : ""
   }${maxYear ? `&maxYear=${maxYear}` : ""}`

export default functionGetAutos
// availability?: boolean,
//    brand?: string | null,
//    model?: string | null,
//    chassis?: string | null,
//    minPrice?: number,
//    maxPrice?: number,
//    minKm?: number,
//    maxKm?: number,
//    minYear?: number,
//    maxYear?: number,

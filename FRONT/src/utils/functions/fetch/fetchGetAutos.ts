import { AutoModelType } from "../../types"

const fetchGetAutos = async (
   availability?: boolean,
   brand?: string | null,
   model?: string | null,
   chassis?: string | null,
   minPrice?: number,
   maxPrice?: number,
   minKm?: number,
   maxKm?: number,
   minYear?: number,
   maxYear?: number,
): Promise<AutoModelType[]> => {
   console.log(import.meta.env.VITE_URL_BASE)

   const Respons = await fetch(
      `${import.meta.env.VITE_URL_BASE + "/search/query?"}${
         availability ? "availability=Disponible" : ""
      }${brand && brand != "All" ? `&brand=${brand}` : ""}${
         model && model != "All" ? `&model=${model}` : ""
      }${chassis && chassis != "All" ? `&chassis=${chassis}` : ""}${
         minPrice ? `&minPrice=${minPrice}` : ""
      }${maxPrice ? `&maxPrice=${maxPrice}` : ""}${minKm ? `&minKm=${minKm}` : ""}${
         maxKm ? `&maxKm=${maxKm}` : ""
      }${minYear ? `&minYear=${minYear}` : ""}${
         maxYear ? `&maxYear=${maxYear}` : ""
      }`,
   )
      .then(res => res.json())
      .then(res => res.res)

   return Respons
}

export default fetchGetAutos

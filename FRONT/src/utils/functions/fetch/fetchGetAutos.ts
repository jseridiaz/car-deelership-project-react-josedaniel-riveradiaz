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
   const Respons = await fetch(
      `${import.meta.env.VITE_URL_BASE + "/search/query?"}${
         availability ? "availability=Disponible" : null
      }${brand && brand != "All" ? `&brand=${brand}` : null}${
         model && model != "All" ? `&model=${model}` : null
      }${chassis && chassis != "All" ? `&chassis=${chassis}` : null}${
         minPrice ? `&minPrice=${minPrice}` : null
      }${maxPrice ? `&maxPrice=${maxPrice}` : null}${
         minKm ? `&minKm=${minKm}` : null
      }${maxKm ? `&maxKm=${maxKm}` : null}${minYear ? `&minYear=${minYear}` : null}${
         maxYear ? `&maxYear=${maxYear}` : null
      }`,
   )
      .then(res => res.json())
      .then(res => res.res)

   return Respons
}

export default fetchGetAutos

import { ObjectFetch } from "../../types"

const globalFetch = async (
   endpoint: string,
   { method, headers, token, data }: ObjectFetch,
) => {
   const headersValues: { "Content-Type"?: string; Authorization?: string } = {}
   if (headers) {
      headersValues["Content-Type"] = "application/json"
   }
   if (token) {
      headersValues.Authorization = `Bearer ${token}`
   }

   const res = await fetch(`${import.meta.env.VITE_URL_BASE}${endpoint}`, {
      method,
      headers: headersValues,
      body:
         data != undefined && data instanceof FormData ? data : JSON.stringify(data),
   }).then(res => res)

   return res
}

export default globalFetch

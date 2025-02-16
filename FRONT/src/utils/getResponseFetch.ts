import { AutoModelType } from "./types"

const getResponseJson = async (res: Response): Promise<AutoModelType[] | []> => {
   const resJson = await res.json()
   const endResult = resJson.res
   return endResult
}

export default getResponseJson

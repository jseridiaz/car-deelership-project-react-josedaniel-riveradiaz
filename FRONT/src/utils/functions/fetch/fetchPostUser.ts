import { SubmitHandlerPersonalInfo } from "../../types"

const fetchPutUser = (idUser: string | null, body: SubmitHandlerPersonalInfo) =>
   fetch(`https://carseller-back-josedaniel.vercel.app/autos/v1/user/${idUser}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
   }).then(res => res.json())
export default fetchPutUser

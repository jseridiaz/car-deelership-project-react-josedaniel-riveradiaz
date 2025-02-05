import { SubmitHandlerPersonalInfo } from "../../types"

const fetchPutUser = (idUser: string | null, body: SubmitHandlerPersonalInfo) =>
   fetch(`${import.meta.env.VITE_URL_BASE + "/user/" + idUser}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
   }).then(res => res.json())
export default fetchPutUser

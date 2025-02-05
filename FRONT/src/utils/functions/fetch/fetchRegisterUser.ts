import { IFormInput } from "../../types"

const fetchRegisterUser = (data: IFormInput) =>
   fetch(`${import.meta.env.VITE_URL_BASE + "/user/register"}`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         name: data.firstname,
         surname: data.surname,
         age: data.birthdate.split("-").join("/"),
         email: data.email.toLocaleLowerCase(),
         password: data.password,
         favourites: data.autosInterested,
      }),
   })
export default fetchRegisterUser

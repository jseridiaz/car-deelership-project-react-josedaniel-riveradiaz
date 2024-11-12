import { IFormInput } from "../../types"

const fetchRegisterUser = (data: IFormInput) =>
   fetch("https://carseller-back-josedaniel.vercel.app/autos/v1/user/register", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         name: data.firstname,
         surname: data.surname,
         age: data.birthdate.split("-").join("/"),
         email: data.email,
         password: data.password,
         favourites: data.autosInterested,
      }),
   })
export default fetchRegisterUser

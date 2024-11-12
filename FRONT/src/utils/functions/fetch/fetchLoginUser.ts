import { IFormLogin } from "../../types"

const fetchLoginUser = (data: IFormLogin) =>
   fetch("https://carseller-back-josedaniel.vercel.app/autos/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
         email: data.email,
         password: data.password,
      }),
   })

export default fetchLoginUser

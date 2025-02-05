import { IFormLogin } from "../../types"

const fetchLoginUser = (data: IFormLogin) =>
   fetch(`${import.meta.env.VITE_URL_BASE + "/user/login"}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
         email: data.email,
         password: data.password,
      }),
   })

export default fetchLoginUser

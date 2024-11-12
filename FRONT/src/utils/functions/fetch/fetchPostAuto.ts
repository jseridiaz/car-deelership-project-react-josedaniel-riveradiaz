const fetchPostAuto = (token: string | null, bodyToSend: FormData) => {
   console.log(token)

   return fetch("https://carseller-back-josedaniel.vercel.app/autos/v1/search", {
      method: "POST",
      headers: {
         Authorization: "Bearer " + token,
      },
      body: bodyToSend,
   })
}

export default fetchPostAuto

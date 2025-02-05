const fetchPostAuto = (token: string | null, bodyToSend: FormData) => {
   return fetch(`${import.meta.env.VITE_URL_BASE}/search`, {
      method: "POST",
      headers: {
         Authorization: "Bearer " + token,
      },
      body: bodyToSend,
   })
}

export default fetchPostAuto

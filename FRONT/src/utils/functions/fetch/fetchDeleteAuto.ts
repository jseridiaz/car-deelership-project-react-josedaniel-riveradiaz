const fetchDeleteAuto = (token: string | null, id: string) =>
   fetch(`https://carseller-back-josedaniel.vercel.app/autos/v1/search/${id}`, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + token },
   })

export default fetchDeleteAuto

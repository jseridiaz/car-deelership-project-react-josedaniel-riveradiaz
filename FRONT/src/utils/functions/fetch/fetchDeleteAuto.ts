const fetchDeleteAuto = (token: string | null, id: string) =>
   fetch(`${import.meta.env.VITE_URL_BASE + "/search/" + id}`, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + token },
   })

export default fetchDeleteAuto

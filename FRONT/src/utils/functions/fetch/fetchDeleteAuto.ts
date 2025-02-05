const fetchDeleteAuto = (token: string | null, id: string) =>
   fetch(`${import.meta.env.VITE_BASE_URL + "/search/" + id}`, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + token },
   })

export default fetchDeleteAuto

const fetchAddFavourite = (idUser: string, autoId: string) =>
   fetch(`${import.meta.env.VITE_URL_BASE + "/customer/" + idUser}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ favourites: autoId }),
   }).then(res => res.json())

export default fetchAddFavourite

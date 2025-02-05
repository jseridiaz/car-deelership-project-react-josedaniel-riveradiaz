const fetchAddFavourite = (idUser: string, autoId: string) =>
   fetch(`${import.meta.env.VITE_BASE_URL + "/customer/idUser/" + idUser}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ favourites: autoId }),
   }).then(res => res.json())

export default fetchAddFavourite

const fetchDeleteFavourite = (customerId: string, autoId: string) =>
   fetch(
      `${import.meta.env.VITE_BASE_URL}/customer/delete/favourites/${customerId}`,
      {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ favourites: autoId }),
      },
   ).then(res => res.json())

export default fetchDeleteFavourite

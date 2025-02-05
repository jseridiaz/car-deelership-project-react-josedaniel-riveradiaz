const fetchClearFavourites = (customerId: string | null) =>
   fetch(
      `${
         import.meta.env.VITE_URL_BASE + "/customer/clear/favourites/" + customerId
      }`,
      {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
      },
   )

export default fetchClearFavourites

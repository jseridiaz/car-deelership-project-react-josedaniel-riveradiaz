const fetchClearFavourites = (customerId: string | null) =>
   fetch(
      `https://carseller-back-josedaniel.vercel.app/autos/v1/customer/clear/favourites/${customerId}`,
      {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
      },
   )

export default fetchClearFavourites

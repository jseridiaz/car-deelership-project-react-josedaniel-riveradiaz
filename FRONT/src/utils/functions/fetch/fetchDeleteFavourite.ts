const fetchDeleteFavourite = (customerId: string, autoId: string) =>
   fetch(
      `https://carseller-back-josedaniel.vercel.app/autos/v1/customer/delete/favourites/${customerId}`,
      {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ favourites: autoId }),
      },
   ).then(res => res.json())

export default fetchDeleteFavourite

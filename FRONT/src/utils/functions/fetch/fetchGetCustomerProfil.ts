const fetchGetCustomerProfil = (idUser: string | null) =>
   fetch(
      `https://carseller-back-josedaniel.vercel.app/autos/v1/customer/user/${idUser}`,
   ).then(res => res.json())

export default fetchGetCustomerProfil

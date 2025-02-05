const fetchGetCustomerProfil = (idUser: string | null) => {
   console.log(import.meta.env.VITE_URL_BASE)

   console.log(idUser)

   return fetch(
      `${import.meta.env.VITE_URL_BASE + "/customer/user/" + idUser}`,
   ).then(res => res.json())
}

export default fetchGetCustomerProfil

const fetchGetCustomerProfil = (idUser: string | null) => {
   return fetch(
      `${import.meta.env.VITE_URL_BASE + "/customer/user/" + idUser}`,
   ).then(res => res.json())
}

export default fetchGetCustomerProfil

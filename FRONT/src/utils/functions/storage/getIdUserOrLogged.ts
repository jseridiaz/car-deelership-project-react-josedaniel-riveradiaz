const getIdUserOrLogged = () =>
   localStorage.getItem("idUser") ?? sessionStorage.getItem("logged")
export default getIdUserOrLogged

const fetchGetUser = (logged: string) =>
   fetch(
      `https://carseller-back-josedaniel.vercel.app/autos/v1/user/${logged}`,
   ).then(res => res.json())

export default fetchGetUser

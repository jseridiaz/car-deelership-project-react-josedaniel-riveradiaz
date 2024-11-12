const fetchAutoById = (el: string) =>
   fetch(`https://carseller-back-josedaniel.vercel.app/autos/v1/search/` + el).then(
      res => res.json(),
   )

export default fetchAutoById

const fetchAutoById = (el: string) =>
   fetch(`${import.meta.env.VITE_BASE_URL + "/search/" + el}`).then(res =>
      res.json(),
   )

export default fetchAutoById

const fetchAutoById = (el: string) =>
   fetch(`${import.meta.env.VITE_URL_BASE + "/search/" + el}`).then(res =>
      res.json(),
   )

export default fetchAutoById

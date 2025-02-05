const fetchGetUser = (logged: string) =>
   fetch(`${import.meta.env.VITE_URL_BASE + "/user/" + logged}`).then(res =>
      res.json(),
   )

export default fetchGetUser

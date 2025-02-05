const fetchGetUser = (logged: string) =>
   fetch(`${import.meta.env.VITE_BASE_URL}/user/${logged}`).then(res => res.json())

export default fetchGetUser

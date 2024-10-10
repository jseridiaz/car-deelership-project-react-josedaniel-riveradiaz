const fetchGetUser = (id: string): void => {
   fetch("http://localhost:3000/autos/v1/user/" + id)
}

export default fetchGetUser

const delStorage = (name: string, storage = true) =>
   storage ? localStorage.removeItem(name) : sessionStorage.removeItem(name)

export default delStorage

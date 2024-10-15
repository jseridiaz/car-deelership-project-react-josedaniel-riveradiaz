export const getStorage = (storage: string) => {
   const localData = localStorage.getItem(storage) ?? sessionStorage.getItem(storage)
   if (localData) {
      return JSON.parse(localData)
   }
}

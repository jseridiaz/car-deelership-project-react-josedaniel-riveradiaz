export const getStorage = (storage: string) =>
   JSON.parse(localStorage.getItem(storage)) ??
   JSON.parse(sessionStorage.getItem(storage))

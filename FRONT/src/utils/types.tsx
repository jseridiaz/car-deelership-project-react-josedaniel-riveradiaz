import { Dispatch, SetStateAction } from "react"

export type AutoModelType = {
   _id: string
   __V: number
   vin: string
   updatedAt: string
   type: string
   state: string
   price: number
   picture: string[]
   model: string
   manufactureYear: number
   kilometer: number
   createdAt: string
   color: string
   brand: string
   availability: string
   acquisitionDate: string
}
export type InputFormType = {
   id: string
   placeholder?: string
   name: string
   auto: boolean
   type?: string
   children?: React.ReactNode
}
export type FieldSetType = {
   description: string
   children?: React.ReactNode
}
export type IFormInput = {
   firstname: string
   surname: string
   email: string
   birthdate: string
   password: string
   autosInterested: string
}
export type ExtendedIFormInput = IFormInput & {
   createdAt: string
   updatedAt: string
   __V: number
}
export type IFormLogin = {
   email: string
   password: string
   savedToken: string | null
}
// export type ResFetchUser = { message: string; res: { logged: {} }; token: string }
export type ErrorContainerType = {
   children: React.ReactNode
   errors?: string | never
}

export type CarContextType = {
   arrayAllCars: AutoModelType[] | null | []
   setArrayAllCars: React.Dispatch<React.SetStateAction<AutoModelType[] | null>>
}
export type PrintListAutoType = {
   arrayToPRint: AutoModelType[] | null
   cssProperties: string
}
// type customerType = {
//    _id: string
//    profile: string
//    buys: string[]
//    reserves: string[]
//    reviews: string[]
//    favourites: string[]
//    createdAt: string
//    updatedAt: string
//    __V: string
// }
export type ImgAutoType = {
   idx: number
   path: string
   alt: string
   brand: string
   model: string
   km: number
   availavility: string
   year: number
   color: string
   price: number
   state: string
   autoId: string
   customerId: string | null
}
export type PaginationTypes = {
   array: AutoModelType[]
   allPages: number
   currentPage: number
   setCurrentPage: (idx: number) => void
}

export type GlobalCurrentPageType = {
   currentPage: number
   setCurrentPage: (newPage: number) => void
}
export type GlobalTokenType = {
   token: string | null
   setToken: Dispatch<SetStateAction<string | null>>
}
export type GlobalLoggedType = {
   logged: string | null
   setLogged: Dispatch<SetStateAction<string | null>>
}
export type ParrafType = {
   h2Text: string
   children: React.ReactNode
   cssProperties: string
}
export type ErrorContainerExtended = ErrorContainerType & { cssProperties: string }
export type FavouriteContentType = {
   arrayFavourites: string[] | null
   setArrayFavourites: Dispatch<SetStateAction<string[] | null>>
}

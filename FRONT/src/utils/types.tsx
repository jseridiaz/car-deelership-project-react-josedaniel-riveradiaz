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
export type ResFetchUser = { message: string; res: { logged: {} }; token: string }
export type ErrorContainerType = {
   children: React.ReactNode
   errors?: string | never
}

export type CarContextType = {
   arrayAllCars: AutoModelType[] | null | []
   setArrayAllCars: React.Dispatch<React.SetStateAction<AutoModelType[] | null>>
}

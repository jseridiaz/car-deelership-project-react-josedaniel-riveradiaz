import { Dispatch, LegacyRef, SetStateAction } from "react"
import { UseFormRegister } from "react-hook-form"

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
   cssProperties?: string
   labelProperties?: string
}
export type IFormInput = {
   firstname: string
   surname: string
   email: string
   age: string
   password: string
   autosInterested: "Cars" | "SUV" | "Truck"
}
export type ExtendedIFormInput = IFormInput & {
   message: string
   createdAt: string
   updatedAt: string
   __V: number
}
export type IFormLogin = {
   email: string
   password: string
   savedToken: boolean | null
}
// export type ResFetchUser = { message: string; res: { logged: {} }; token: string }
export type ErrorContainerType = {
   children: React.ReactNode
   errors?: string | never
}

export type CarContextType = {
   arrayAllCars: AutoModelType[] | null | []
   setArrayAllCars: Dispatch<SetStateAction<AutoModelType[] | []>>
}
export type GlobalArrayNoResultType = {
   arrayNoResult: AutoModelType[] | []
   setArrayNoResult: Dispatch<SetStateAction<AutoModelType[] | []>>
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
   customerId?: string | null
}
export type PaginationTypes = {
   allPages: number
   currentPage: number
   setCurrentPage: (idx: number) => void
   referenceForm: number
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
   h2Text?: string
   children: React.ReactNode
   cssProperties: string
}
export type ErrorContainerExtended = ErrorContainerType & { cssProperties: string }
export type FavouriteContentType = {
   arrayFavourites: string[] | []
   setArrayFavourites: Dispatch<SetStateAction<string[] | []>>
}
export type CheckboxFilter = {
   children: React.ReactNode
   idName: string
   reference: LegacyRef<HTMLInputElement>
   name?: string
   checked?: boolean
   handleChange: () => void
}
export type ContainerColumnType = {
   children: React.ReactNode
   className: string
}
export type InputNumberType = {
   spanName: string
   idName: string
   numberValue?: string
   reference?: React.RefObject<HTMLInputElement> | null
   placeholder?: string
   handleKey?: (e: React.KeyboardEvent<HTMLInputElement>) => void
   handleInput?: (e: React.FormEvent<HTMLInputElement>) => void
}
export type ParrafInfoPersonalType = {
   children: React.ReactNode
   result: string | undefined | number
}

export type SubmitHandlerPersonalInfo = {
   name?: string
   surname?: string
   favourites?: string
   numberFavourites?: number
   rol?: "admin" | "user"
}
export type GlobalUserInfoType = {
   userInfo: string | null
   setUserInfo: Dispatch<SetStateAction<string | null>>
}
export type UserInfoType = {
   name: string
   surname: string
   email: string
   age: string
   rol: string
   favourites: string
   password: null
   updatedAt: string
   createdAt: string
   __v: number
   _id: string
}
export type ErrorPostType = {
   className?: string
   error?: string
   children: React.ReactNode
}

export type InputTextFormType = {
   type?: string
   register: UseFormRegister<any>
   name: string
   placeholders?: string
   autoComplete?: string
   children?: React.ReactNode
   requiredBoolean?: boolean
}

export type ChildrenType = { children: React.ReactNode }
export type PostAutoType = {
   vin: string
   type: string
   state: string
   price: string
   picture: string
   model: string
   manufactureYear: string
   kilometer: string
   color: string
   brand: string
   availability: string
   acquisitionDate: string
}
export type userID = {
   _id: string
   name: string
   surname: string
   email: string
   age: string
   rol: string
   favourites: string
   password: string
   createdAt: string
   updatedAt: string
   __v: number
}
export type IdName = { idName: string }
export type parrafAutoType = {
   el: string | number
   children: React.ReactNode
}
export type ButtonType = {
   signal?: React.ReactNode
   properties: string
   type?: "reset" | "button" | "submit"
   link?: string
   isLink?: boolean
   children?: React.ReactNode
   functionClick?: () => void
}
export type FilterComponentReducerType = {
   brands: string[] | null
   chassis: string | null
   availableChassis: AvailableChassisType[]
   brand: string | null
   models: string[] | null
   model: string | null
   availability: boolean
   minPrice: number
   maxPrice: number
   minKm: number
   maxKm: number
   minYear: number
   maxYear: number
   loading: boolean
   viewPort: number
}
export type AvailableChassisType = {
   value: string
   description: string
}
export type ActionFilterType =
   | {
        type: "setBrands"
        payload: AutoModelType[]
     }
   | {
        type: "setChassis"
        payload: string | null
     }
   | {
        type: "setBrand"
        payload: string | null
     }
   | {
        type: "setAvailableChassis"
        payload: AutoModelType[]
     }
   | {
        type: "setModel"
        payload: string | null
     }
   | {
        type: "setModels"
        payload: string[] | null
     }
   | {
        type: "setAvailability"
        payload: boolean
     }
   | {
        type: "setMinPrice"
        payload: number
     }
   | {
        type: "setMaxPrice"
        payload: number
     }
   | {
        type: "setMinKm"
        payload: number
     }
   | {
        type: "setMaxKm"
        payload: number
     }
   | {
        type: "setMinYear"
        payload: number
     }
   | {
        type: "setMaxYear"
        payload: number
     }
   | {
        type: "setLoading"
        payload: boolean
     }
   | {
        type: "setViewPort"
        payload: number
     }
   | {
        type: "CLEAR"
     }

export type ReducerFilterType = {
   state: FilterComponentReducerType
}
export type ActionTypes =
   | "setMaxYear"
   | "setMinYear"
   | "setMaxKm"
   | "setMinKm"
   | "setMaxPrice"
   | "setMinPrice"

export type InformationPersonalType = {
   name: string
   surname: string
   kindFavourites: string
   numberFavourites: number
   loading: boolean
}
export type InformationPersonalAction =
   | {
        type: "setName"
        payload: string
     }
   | {
        type: "setSurName"
        payload: string
     }
   | {
        type: "setKindFavourites"
        payload: string
     }
   | {
        type: "setNumberFavourites"
        payload: number
     }
   | {
        type: "setLoading"
        payload: boolean
     }

export type HeaderComponentType = {
   userInfo: string | null
   boolean: boolean
   showNav: boolean
}
export type HeaderComponentAction =
   | {
        type: "setUserInfo"
        payload: string | null
     }
   | {
        type: "setBoolean"
        payload?: boolean
     }
   | {
        type: "setShowNav"
        payload?: boolean
     }

export type ToastType = {
   children: React.ReactNode
   handle?: boolean
}

export type SeoType = {
   title: string
   description: string
   url: string
   img: string
}
export type IFormForm = {
   brand: string
   chassis: string
   model: string
   available: boolean
   minPrice: number
   maxPrice: number
   minKm: number
   maxKm: number
   minYear: number
   maxYear: number
}
export type LoaderType = {
   properties?: string
}
export type InputRangeType = {
   idName: string
   children: React.ReactNode
   defaultValue: string
   minValue: string
   maxValue: string
   numberValue?: string
   step: string
   reference: React.RefObject<HTMLInputElement> | null
   firstValue: number
   handleChange: () => void
   setValue: () => number
}
export type ResizeContextType = {
   viewPort: number
   desktop: boolean
   changeViewPort: () => void
}
export type ObjectFetch = {
   method: "GET" | "POST" | "PUT" | "DELETE"
   // token?: string
   headers?: boolean
   data?: bodyFetch
   token?: string | null
}

type bodyFetch =
   | IFormInput
   | SubmitHandlerPersonalInfo
   | FormData
   | IFormLogin
   | { favourites: string }
   | string
export type FunctionGetAutosTypes = {
   availability?: boolean
   brand?: string | null
   model?: string | null
   chassis?: string | null
   minPrice?: number
   maxPrice?: number
   minKm?: number
   maxKm?: number
   minYear?: number
   maxYear?: number
}

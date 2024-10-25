import {
   InformationPersonalAction,
   InformationPersonalType,
} from "../../../utils/types"

export const INITIAL_STATE = {
   name: "",
   surname: "",
   kindFavourites: "",
   numberFavourites: 0,
   loading: false,
}

export const InformationPersonalReducer = (
   state: InformationPersonalType = INITIAL_STATE,
   action: InformationPersonalAction,
) => {
   switch (action.type) {
      case "setName":
         return { ...state, name: action.payload }
      case "setSurName":
         return { ...state, surname: action.payload }
      case "setKindFavourites":
         return { ...state, kindFavourites: action.payload }
      case "setNumberFavourites":
         return { ...state, numberFavourites: action.payload }
      case "setLoading":
         return { ...state, loading: action.payload }
   }
}

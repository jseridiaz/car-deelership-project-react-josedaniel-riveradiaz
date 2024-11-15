import { HeaderComponentAction, HeaderComponentType } from "../../../utils/types"

export const INITIAL_STATE_HEADER: HeaderComponentType = {
   userInfo: null,
   boolean: false,
   showNav: true,
}

export const HeaderComponentReducer = (
   state: HeaderComponentType,
   action: HeaderComponentAction,
) => {
   switch (action.type) {
      case "setUserInfo":
         return { ...state, userInfo: action.payload }
      case "setBoolean":
         return {
            ...state,
            boolean: action.payload ? action.payload : !state.boolean,
         }
      case "setShowNav":
         return {
            ...state,
            showNav: action.payload ? action.payload : !state.showNav,
         }
   }
}

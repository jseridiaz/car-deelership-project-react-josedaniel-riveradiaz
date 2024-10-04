import { createContext, useState } from "react"
import { ErrorContainerType, FavouriteContentType } from "../../utils/types"

export const FavouritesContext = createContext<FavouriteContentType>({
   arrayFavourites: null,
   setArrayFavourites: () => {},
})
const GlobalFavouritesArray = ({ children }: ErrorContainerType) => {
   const [arrayFavourites, setArrayFavourites] = useState<string[] | null>(() => {
      const favourites = localStorage.getItem("favourites")
      return favourites ? (JSON.parse(favourites) as string[]) : null
   })
   return (
      <FavouritesContext.Provider value={{ arrayFavourites, setArrayFavourites }}>
         {children}
      </FavouritesContext.Provider>
   )
}

export default GlobalFavouritesArray

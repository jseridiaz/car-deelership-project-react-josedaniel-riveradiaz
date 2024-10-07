import { createContext, useState } from "react"
import { ErrorContainerType, FavouriteContentType } from "../../utils/types"

export const FavouritesContext = createContext<FavouriteContentType>({
   arrayFavourites: [],
   setArrayFavourites: () => {},
})
const GlobalFavouritesArray = ({ children }: ErrorContainerType) => {
   const [arrayFavourites, setArrayFavourites] = useState<string[] | []>(() => {
      const favourites = localStorage.getItem("favourites")
      return favourites ? (JSON.parse(favourites) as string[]) : []
   })
   return (
      <FavouritesContext.Provider value={{ arrayFavourites, setArrayFavourites }}>
         {children}
      </FavouritesContext.Provider>
   )
}

export default GlobalFavouritesArray

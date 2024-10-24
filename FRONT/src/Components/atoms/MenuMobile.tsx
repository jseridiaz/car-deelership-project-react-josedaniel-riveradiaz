import MenuMobileSvg from "./icons/MenuMobileSvg/MenuMobileSvg"
type MenuMobileType = { handleClick: () => void }
const MenuMobile: React.FC<MenuMobileType> = ({ handleClick }) => {
   return (
      <MenuMobileSvg
         className=' absolute right-0 md:hidden cursor-pointer'
         onClick={() => {
            handleClick()
         }}
      />
   )
}

export default MenuMobile

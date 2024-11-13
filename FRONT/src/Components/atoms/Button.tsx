import { Link } from "react-router-dom"
import { ButtonType } from "../../utils/types"

const Button: React.FC<ButtonType> = ({
   signal = null,
   properties,
   type,
   link = "",
   children,
   isLink = false,
   functionClick,
}) => {
   return isLink ? (
      <Link to={link} className={properties}>
         {children}
         {signal ? signal : null}
      </Link>
   ) : (
      <button type={type} className={properties} onClick={functionClick}>
         {children}
         {signal ? signal : null}
      </button>
   )
}

export default Button

import { Link } from "react-router-dom"

type ButtonType = {
   signal?: React.ReactNode
   properties: string
   type?: string | undefined
   link: string | boolean
   children?: React.ReactNode
}
const Button: React.FC<ButtonType> = ({
   signal = null,
   properties,
   type,
   link,
   children,
}) => {
   return link ? (
      <Link to={link} className={properties}>
         {children}
         {signal ? signal : null}
      </Link>
   ) : (
      <button type={type} className={properties}>
         {children}
      </button>
   )
}

export default Button

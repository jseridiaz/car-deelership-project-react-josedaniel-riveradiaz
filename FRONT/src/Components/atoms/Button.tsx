import { Link } from "react-router-dom"

type ButtonType = {
   text?: string
   signal?: React.ReactNode
   properties: string
   link: boolean
   children?: React.ReactNode
}
const Button: React.FC<ButtonType> = ({
   text,
   signal = null,
   properties,
   link,
   children,
}) => {
   return link ? (
      <Link to='' className={properties}>
         {text}
         {signal ? signal : null}
      </Link>
   ) : (
      <button className={properties}>{children}</button>
   )
}

export default Button

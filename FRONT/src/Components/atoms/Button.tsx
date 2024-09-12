import { Link } from "react-router-dom"

type ButtonType = {
   text: string
   signal?: React.ReactNode
   properties: string
}
const Button: React.FC<ButtonType> = ({ text, signal = null, properties }) => {
   return (
      <Link to='' className={properties}>
         {text}
         {signal ? signal : null}
      </Link>
   )
}

export default Button

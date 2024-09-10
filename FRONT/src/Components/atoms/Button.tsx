import { Link } from "react-router-dom"

type ButtonType = {
   text: string
   signal?: React.ReactNode
   ase: string
}
const Button: React.FC<ButtonType> = ({ text, signal = null, ase }) => {
   return (
      <Link to='' className={ase}>
         {text}
         {signal ? signal : null}
      </Link>
   )
}

export default Button

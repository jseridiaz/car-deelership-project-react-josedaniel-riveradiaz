import { LoaderType } from "../../utils/types"

const Loader: React.FC<LoaderType> = ({ properties }) => {
   return (
      <div id='loader-container' className={`animate-spin z-40 ${properties}`}></div>
   )
}

export default Loader

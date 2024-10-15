import { ChildrenType } from "../../utils/types"

const LiHeader: React.FC<ChildrenType> = ({ children }) => {
   return <li className='content-center relative'>{children}</li>
}

export default LiHeader

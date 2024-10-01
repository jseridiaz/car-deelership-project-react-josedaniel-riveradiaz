import React from "react"
import { ErrorContainerExtended } from "../../utils/types"

const Parraf: React.FC<ErrorContainerExtended> = ({ children, cssProperties }) => {
   return <p className={cssProperties}>{children}</p>
}

export default Parraf

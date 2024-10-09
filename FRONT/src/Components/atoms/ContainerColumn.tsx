import React from "react"
import { ContainerColumnType } from "../../utils/types"

const ContainerColumn: React.FC<ContainerColumnType> = ({ children, className }) => {
   return <div className={`flex flex-col ${className}`}>{children}</div>
}

export default ContainerColumn

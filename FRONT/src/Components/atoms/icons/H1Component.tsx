import React from "react"
import { ErrorContainerType } from "../../../utils/types"

const H1Component = ({ children }: ErrorContainerType) => {
   return <h1 className='mt-6'>{children}</h1>
}

export default H1Component

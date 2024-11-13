import { useState } from "react"

const useLoading = () => {
   const [loading, setLoading] = useState<boolean>(false)

   const changeLoading = () => setLoading(prev => !prev)

   return { loading, changeLoading, setLoading }
}

export default useLoading

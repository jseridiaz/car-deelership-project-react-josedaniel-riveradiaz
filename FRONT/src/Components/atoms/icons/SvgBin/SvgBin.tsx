import { IdName } from "../../../../utils/types"
import { useContext } from "react"
import { CarContext } from "../../../Providers/GlobalCarsArray"
import { TokenContext } from "../../../Providers/GlobalToken"
import useLoading from "../../../customHooks/useLoading"
import Loader from "../../Loader"
import globalFetch from "../../../../utils/functions/fetch/globalFetch"

const SvgBin: React.FC<IdName> = ({ idName }) => {
   const { arrayAllCars, setArrayAllCars } = useContext(CarContext)
   const { token } = useContext(TokenContext)
   const { loading, changeLoading } = useLoading()

   const handleDelete = async (id: string) => {
      changeLoading()
      const arrayBeforeError = arrayAllCars
      globalFetch(`/search/${id}`, { method: "DELETE", token })
         .then(() => {
            changeLoading()
         })
         .catch(err => {
            if (arrayBeforeError) setArrayAllCars(arrayBeforeError)
            throw new Error(err)
         })
      if (arrayAllCars?.length) {
         setArrayAllCars(arrayAllCars?.filter(el => el._id !== id))
      }
   }

   return (
      <>
         {loading && <Loader properties='right-[85%] top-1/3' />}
         <svg
            xmlns='http://www.w3.org/2000/svg'
            width={30}
            height={30}
            viewBox='-133.12 -133.12 1290.24 1290.24'
            className='z-50 transition duration-500 bg-white absolute bottom-2 right-2 rounded-full hover:bg-red-500 cursor-pointer'
            onClick={e => {
               e.preventDefault()
               handleDelete(idName).then(() => {
                  setArrayAllCars(
                     arrayAllCars ? arrayAllCars.filter(el => el._id != idName) : [],
                  )
               })
            }}
         >
            <path d='M831.24 280.772c5.657 0 10.24-4.583 10.24-10.24v-83.528c0-5.657-4.583-10.24-10.24-10.24H194.558a10.238 10.238 0 0 0-10.24 10.24v83.528c0 5.657 4.583 10.24 10.24 10.24H831.24zm0 40.96H194.558c-28.278 0-51.2-22.922-51.2-51.2v-83.528c0-28.278 22.922-51.2 51.2-51.2H831.24c28.278 0 51.2 22.922 51.2 51.2v83.528c0 28.278-22.922 51.2-51.2 51.2z' />
            <path d='m806.809 304.688-58.245 666.45c-.544 6.246-6.714 11.9-12.99 11.9H290.226c-6.276 0-12.447-5.654-12.99-11.893L218.99 304.688c-.985-11.268-10.917-19.604-22.185-18.619s-19.604 10.917-18.619 22.185l58.245 666.45c2.385 27.401 26.278 49.294 53.795 49.294h445.348c27.517 0 51.41-21.893 53.796-49.301l58.244-666.443c.985-11.268-7.351-21.201-18.619-22.185s-21.201 7.351-22.185 18.619zM422.02 155.082V51.3c0-5.726 4.601-10.342 10.24-10.342h161.28c5.639 0 10.24 4.617 10.24 10.342v103.782c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V51.3c0-28.316-22.908-51.302-51.2-51.302H432.26c-28.292 0-51.2 22.987-51.2 51.302v103.782c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z' />
            <path d='M496.004 410.821v460.964c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V410.821c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zm-192.435 1.767 39.936 460.964c.976 11.269 10.903 19.612 22.171 18.636s19.612-10.903 18.636-22.171l-39.936-460.964c-.976-11.269-10.903-19.612-22.171-18.636s-19.612 10.903-18.636 22.171zm377.856-3.535-39.936 460.964c-.976 11.269 7.367 21.195 18.636 22.171s21.195-7.367 22.171-18.636l39.936-460.964c.976-11.269-7.367-21.195-18.636-22.171s-21.195 7.367-22.171 18.636z' />
         </svg>
      </>
   )
}

export default SvgBin

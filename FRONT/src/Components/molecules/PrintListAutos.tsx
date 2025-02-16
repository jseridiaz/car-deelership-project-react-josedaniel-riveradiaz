import { memo, useContext, useEffect, useState } from "react"
import { PrintListAutoType } from "../../utils/types"
import ImgAutos from "./ImgAutos"
import { LoggedContext } from "../Providers/GlobalLogged"
import { TokenContext } from "../Providers/GlobalToken"
import globalFetch from "../../utils/functions/fetch/globalFetch"

const PrintListAutos: React.FC<PrintListAutoType> = ({
   arrayToPRint,
   cssProperties,
}) => {
   const { logged } = useContext(LoggedContext)
   const { token } = useContext(TokenContext)

   const [idSesion, setIdSession] = useState<string | null>(
      localStorage.getItem("idUser") ?? sessionStorage.getItem("logged"),
   )

   const [customerId, setCustomerId] = useState<string | null>(null)

   useEffect(() => {
      if (token || logged) {
         globalFetch(`/customer/user/${idSesion}`, { method: "GET" })
            .then(res => res.json())
            .then(res => {
               setCustomerId(res.res?._id ?? null)
            })
         setIdSession(
            localStorage.getItem("idUser") ?? sessionStorage.getItem("logged"),
         )
      }
   }, [])

   return (
      <section className={cssProperties}>
         <ul className='flex flex-wrap justify-evenly gap-y-14 gap-x-7'>
            {arrayToPRint &&
               arrayToPRint.map((el, idx) => (
                  <ImgAutos
                     key={idx}
                     idx={idx}
                     path={el.picture[0]}
                     alt={`${el.brand}_${el.model}_${el.manufactureYear}_${el.color}`}
                     brand={el.brand}
                     state={el.state}
                     model={el.model}
                     km={el.kilometer}
                     availavility={el.availability}
                     year={el.manufactureYear}
                     price={el.price}
                     color={el.color}
                     autoId={el._id}
                     customerId={customerId}
                  />
               ))}
         </ul>
      </section>
   )
}

export default memo(PrintListAutos)

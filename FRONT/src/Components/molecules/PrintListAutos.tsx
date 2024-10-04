// import { useEffect } from "react"
import { useContext, useEffect, useState } from "react"
import { PrintListAutoType } from "../../utils/types"

import ImgAutos from "../atoms/ImgAutos"
import { LoggedContext } from "../Providers/GlobalLogged"
import { TokenContext } from "../Providers/GlobalToken"

const PrintListAutos: React.FC<PrintListAutoType> = ({
   arrayToPRint,
   cssProperties,
}) => {
   const { logged } = useContext(LoggedContext)
   const { token } = useContext(TokenContext)
   const [idSesion, setIdSession] = useState<string | null>(
      localStorage.getItem("idUSer") ?? sessionStorage.getItem("logged"),
   )
   const [customerId, setCustomerId] = useState<string | null>(null)

   useEffect(() => {
      console.log(idSesion)
      setIdSession(
         localStorage.getItem("idUSer") ?? sessionStorage.getItem("logged"),
      )
      fetch(`http://localhost:3000/autos/v1/customer/user/${idSesion}`)
         .then(res => res.json())
         .then(res => {
            console.log(res.res._id)
            return setCustomerId(res.res._id)
         })
   }, [logged, token])
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

export default PrintListAutos

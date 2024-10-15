import { useEffect, useState } from "react"
import Button from "../Components/atoms/Button"
import ContainerColumn from "../Components/atoms/ContainerColumn"
import H2SingleComponent from "../Components/atoms/H2SingleComponent"
import ParrafInfoPersonal from "../Components/molecules/ParrafInfoPersonal"
import FieldSet from "../Components/atoms/FieldSet"
import { useForm, SubmitHandler } from "react-hook-form"
import { SubmitHandlerPersonalInfo } from "../utils/types"
import InputTextForm from "../Components/atoms/InputTextForm"

const InformationPersonal = () => {
   const idUser: string | null =
      localStorage.getItem("idUser") ?? sessionStorage.getItem("logged")

   const [name, setName] = useState<string>()
   const [surname, setSurname] = useState<string>()
   const [kindFavourites, setKindFavourites] = useState<string>()
   const [numberFavourites, setNumberFavourites] = useState<number>(0)
   const { register, handleSubmit, reset } = useForm({
      defaultValues: {
         name: "",
         surname: "",
         favourites: "",
      },
   })

   useEffect(() => {
      fetch("http://localhost:3000/autos/v1/customer/user/" + idUser)
         .then(res => res.json())
         .then(r => {
            const { res } = r
            console.log(res)
            setName(res.profile.name)
            setSurname(res.profile.surname)
            setKindFavourites(res.profile.favourites)
            setNumberFavourites(res.favourites.length)
         })
   }, [idUser])
   const submitFunct: SubmitHandler<SubmitHandlerPersonalInfo> = data => {
      console.log(idUser)

      const bodyObject: SubmitHandlerPersonalInfo = {}
      if (data.name) {
         bodyObject.name = data.name
      }
      if (data.surname) {
         bodyObject.surname = data.surname
      }
      if (data.favourites) {
         bodyObject.favourites = data.favourites
      }
      fetch(`http://localhost:3000/autos/v1/user/${idUser}`, {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            ...bodyObject,
         }),
      })
         .then(res => res.json())
         .then(res => {
            const { name, surname, favourites } = bodyObject
            if (name) {
               setName(name)
            }
            if (surname) setSurname(surname)
            if (favourites) setKindFavourites(favourites)
            reset()
            console.log(res)
            console.log(bodyObject)
         })
      //  .finally(() => {
      //     reset()
      //  })
   }
   return (
      <ContainerColumn className='bg-slate-200 min-h-screen items-center p-4'>
         <div className='flex p-4  gap-4 mt-4 bg-blue-50 w-full rounded-xl outline outline-2 outline-black justify-between'>
            <ContainerColumn className='gap-4 w-1/2 '>
               <H2SingleComponent cssProperties='text-4xl font-bold my-2 p-6 bg-blue-400 w-fit rounded-full self-center'>
                  Personal infomation
               </H2SingleComponent>
               <ParrafInfoPersonal result={name}>
                  <p>Name:</p>
               </ParrafInfoPersonal>
               <ParrafInfoPersonal result={surname}>
                  <p>Surname:</p>
               </ParrafInfoPersonal>
               <ParrafInfoPersonal result={kindFavourites}>
                  <p>Kind of Favourites:</p>
               </ParrafInfoPersonal>
               <ParrafInfoPersonal result={numberFavourites}>
                  <p>Favourite Autos:</p>
               </ParrafInfoPersonal>
            </ContainerColumn>
            <div className='h-full border border-1 border-black '></div>
            <form
               action=''
               className='flex flex-col gap-2 mt-4  w-1/2 items-center'
               onSubmit={handleSubmit(submitFunct)}
            >
               <H2SingleComponent cssProperties='text-4xl font-bold p-6 bg-red-300 w-fit rounded-full self-center'>
                  Form to change Info
               </H2SingleComponent>
               <FieldSet description='Change your name'>
                  <InputTextForm
                     register={register}
                     name='name'
                     requiredBoolean={false}
                  />
               </FieldSet>
               <FieldSet description='Change your Surname'>
                  <InputTextForm
                     register={register}
                     name='surname'
                     requiredBoolean={false}
                  />
               </FieldSet>
               <FieldSet description='Change your Surname'>
                  <select
                     className='p-2 hover:bg-slate-100 focus:bg-slate-100'
                     defaultValue={kindFavourites}
                     {...register("favourites")}
                  >
                     <option value='Cars'>Cars</option>
                     <option value='SUV'>SUVS</option>
                     <option value='Truck'>Trucks</option>
                  </select>
               </FieldSet>
               <Button
                  isLink={false}
                  properties='transition-all duration-400 bg-blue-100 text-black hover:bg-blue-500 hover:font-bold hover:text-white hover:ring-offset-2  hover:ring-2 hover:ring-blue-800 focus:text-white focus:ring-offset-2  focus:ring-2 focus:ring-blue-800 focus:bg-blue-500 w-1/3'
               >
                  Change Personal info
               </Button>
            </form>
         </div>
      </ContainerColumn>
   )
}

export default InformationPersonal

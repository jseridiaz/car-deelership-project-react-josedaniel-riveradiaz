import { useEffect, useReducer } from "react"
import Button from "../Components/atoms/Button"
import ContainerColumn from "../Components/atoms/ContainerColumn"
import H2SingleComponent from "../Components/atoms/H2SingleComponent"
import ParrafInfoPersonal from "../Components/molecules/ParrafInfoPersonal"
import FieldSet from "../Components/atoms/FieldSet"
import { useForm, SubmitHandler } from "react-hook-form"
import {
   InformationPersonalAction,
   InformationPersonalType,
   SubmitHandlerPersonalInfo,
} from "../utils/types"
import InputTextForm from "../Components/atoms/InputTextForm"
import {
   InformationPersonalReducer,
   INITIAL_STATE,
} from "../Components/customHooks/useReducer/InformationPersonalReducer"
import Seo from "../Components/molecules/Seo"
import Loader from "../Components/atoms/Loader"
import { getStorage } from "../utils/functions/storage/getStorage"
import getIdUserOrLogged from "../utils/functions/storage/getIdUserOrLogged"
import globalFetch from "../utils/functions/fetch/globalFetch"

const InformationPersonal = () => {
   const idUser: string | null = getIdUserOrLogged()

   const [state, dispatch] = useReducer<
      React.Reducer<InformationPersonalType, InformationPersonalAction>
   >(InformationPersonalReducer, INITIAL_STATE)

   const { register, handleSubmit, reset } = useForm({
      defaultValues: {
         name: "",
         surname: "",
         favourites: "",
      },
   })

   useEffect(() => {
      dispatch({ type: "setLoading", payload: true })
      globalFetch(`/customer/user/${idUser}`, { method: "GET" })
         .then(res => res.json())
         .then(result => {
            const { res } = result
            dispatch({ type: "setName", payload: res.profile.name })
            dispatch({ type: "setSurName", payload: res.profile.surname })
            dispatch({ type: "setKindFavourites", payload: res.profile.favourites })
            dispatch({ type: "setNumberFavourites", payload: res.favourites.length })
            dispatch({ type: "setLoading", payload: false })
         })
   }, [idUser])
   const submitFunct: SubmitHandler<SubmitHandlerPersonalInfo> = data => {
      const rolUser: "admin" | "user" = getStorage("userInfo").rol
      const bodyObject: SubmitHandlerPersonalInfo = { rol: rolUser }
      if (data.name) {
         bodyObject.name = data.name
      }
      if (data.surname != "") {
         bodyObject.surname = data.surname
      }
      if (data.favourites != "") {
         bodyObject.favourites = data.favourites
      }
      globalFetch(`/user/${idUser}`, {
         method: "PUT",
         headers: true,
         data: bodyObject,
      }).then(() => {
         const { name, surname, favourites } = bodyObject
         if (name) {
            dispatch({ type: "setName", payload: name })
         }
         if (surname) dispatch({ type: "setSurName", payload: surname })
         if (favourites) dispatch({ type: "setKindFavourites", payload: favourites })
         reset()
         const local = getStorage("userInfo")

         if (local && favourites) {
            local.favourites = favourites
            if (localStorage.getItem("userInfo") != null) {
               localStorage.setItem("userInfo", JSON.stringify(local))
            } else {
               sessionStorage.setItem("userInfo", JSON.stringify(local))
            }
         }
      })
   }
   return (
      <>
         <Seo
            title='Personal information - Car seller'
            description='Check out your personal information as your name, surname and more... and decide change it as you prefer.'
            url='https://carseller-for-you.vercel.app/about-us'
            img='/PorscheBlog.png'
         />
         <ContainerColumn className='bg-slate-200 min-h-screen items-center p-4'>
            <div className='flex  p-4 h-fit mt-4 bg-blue-50 w-full rounded-xl outline outline-2 outline-black justify-between flex-wrap lg:content-center lg:gap-0 gap-6'>
               <ContainerColumn className='gap-4 lg:w-1/2 h-fit w-full '>
                  <H2SingleComponent cssProperties='text-4xl font-bold my-2 p-6 bg-blue-400 w-fit  rounded self-center'>
                     Personal infomation
                  </H2SingleComponent>
                  <ParrafInfoPersonal result={state.name}>
                     <p>Name:</p>
                     {state.loading && <Loader properties='right-[7%]' />}
                  </ParrafInfoPersonal>
                  <ParrafInfoPersonal result={state.surname}>
                     <p>Surname:</p>
                     {state.loading && <Loader properties='right-[7%]' />}
                  </ParrafInfoPersonal>
                  <ParrafInfoPersonal result={state.kindFavourites}>
                     <p>Kind of Favourites:</p>
                     {state.loading && <Loader properties='right-[7%]' />}
                  </ParrafInfoPersonal>
                  <ParrafInfoPersonal result={state.numberFavourites}>
                     <p>Favourite Autos:</p>
                  </ParrafInfoPersonal>
               </ContainerColumn>
               <form
                  action=''
                  className='flex flex-col gap-2 mt-4 w-full lg:w-1/2 items-center '
                  onSubmit={handleSubmit(submitFunct)}
               >
                  <H2SingleComponent cssProperties='text-2xl md:text-4xl font-bold p-5 md:p-6 bg-red-300 w-fit rounded self-center'>
                     Change info form
                  </H2SingleComponent>
                  <FieldSet
                     description='Change your name'
                     cssProperties='w-[80%] md:w-1/2'
                     labelProperties='text-2xl '
                  >
                     <InputTextForm
                        register={register}
                        name='name'
                        requiredBoolean={false}
                     />
                  </FieldSet>
                  <FieldSet
                     description='Change your Surname'
                     cssProperties='w-[80%] md:w-1/2'
                     labelProperties='text-2xl '
                  >
                     <InputTextForm
                        register={register}
                        name='surname'
                        requiredBoolean={false}
                     />
                  </FieldSet>
                  <FieldSet
                     description='Change your favourite kind of Autos'
                     cssProperties='w-[80%] md:w-1/2'
                     labelProperties='text-2xl '
                  >
                     <select
                        className='p-2 hover:bg-slate-100 focus:bg-slate-100 w-full'
                        defaultValue={state.kindFavourites}
                        {...register("favourites")}
                     >
                        <option value='Cars'>Cars</option>
                        <option value='SUVs & Crossover'>SUVS</option>
                        <option value='Trucks'>Trucks</option>
                     </select>
                  </FieldSet>
                  <Button
                     isLink={false}
                     properties='transition-all duration-400 bg-blue-100 text-black hover:bg-blue-500 hover:font-bold hover:text-white hover:ring-offset-2  hover:ring-2 hover:ring-blue-800 focus:text-white focus:ring-offset-2  focus:ring-2 focus:ring-blue-800 focus:bg-blue-500 md:w-1/3 w-[80%]'
                  >
                     Change Personal info
                  </Button>
               </form>
            </div>
         </ContainerColumn>
      </>
   )
}

export default InformationPersonal

import { useForm } from "react-hook-form"
import Button from "../Components/atoms/Button"
import FieldSet from "../Components/atoms/FieldSet"
import { autoBrands } from "../data/autoBrands"
import { colorArray } from "../data/colorArray"
import ErrorPost from "../Components/atoms/ErrorPost"
import InputTextForm from "../Components/atoms/InputTextForm"
import SelectPost from "../Components/atoms/SelectPost"
import ContainerColumn from "../Components/atoms/ContainerColumn"
import { useContext, useState } from "react"
import { PostAutoType } from "../utils/types"
import { TokenContext } from "../Components/Providers/GlobalToken"
import Toast from "../Components/molecules/Toast"
import { turnOffBanner } from "../utils/turnOffBanner"
import Seo from "../Components/molecules/Seo"
import useLoading from "../Components/customHooks/useLoading"
import Loader from "../Components/atoms/Loader"
import globalFetch from "../utils/functions/fetch/globalFetch"

const PostAuto = () => {
   const { token } = useContext(TokenContext)
   const [res, setRes] = useState<boolean>(false)
   const { loading, changeLoading } = useLoading()

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      defaultValues: {
         vin: "",
         brand: "",
         model: "",
         type: "",
         manufactureYear: "",
         kilometer: "",
         state: "",
         price: "",
         availability: "Disponible",
         acquisitionDate: "2024-01-12",
         picture: "",
         color: "",
      },
   })

   const submitFunction = (data: PostAutoType) => {
      changeLoading()
      const formData = new FormData()
      const {
         vin,
         brand,
         model,
         type,
         manufactureYear,
         kilometer,
         state,
         price,
         color,
         picture,
      } = data
      formData.append("vin", vin)
      formData.append("brand", brand)
      formData.append("model", model)
      formData.append("type", type)
      formData.append("manufactureYear", manufactureYear)
      formData.append("kilometer", kilometer)
      formData.append("state", state)
      formData.append("price", price)
      formData.append("color", color)
      formData.append("availability", "Disponible")
      formData.append("picture", picture[0])
      globalFetch(`/search`, { method: "POST", token, data: formData }).then(res => {
         if (res.ok) {
            setRes(true)
            turnOffBanner(setRes, 3000, false)
            reset()
         }
         changeLoading()
      })
   }
   return (
      <>
         <Seo
            title='Post auto page - Car seller'
            description='Get in in your personal page by logging with your datas and take advantages like offers and disccounts, as well as find out about the latest stocks firts.'
            url='https://carseller-for-you.vercel.app/post-auto'
            img='https://res.cloudinary.com/ddybbosdk/image/upload/v1726562162/CARS%20AUTODEELER/corvete-portrait-login_xoru7n.webp'
         />
         <div className='relative bg-blue-200 min-h-screen p-6 border border-black'>
            <form
               action=''
               className='flex flex-wrap gap-10 justify-center items-center content-center'
               onSubmit={handleSubmit(submitFunction)}
            >
               <ContainerColumn className=' bg-slate-400 items-center p-6 rounded-xl bg-[url("https://www.transparenttextures.com/patterns/brushed-alum.png")] lg:w-1/2 sm:w-[80%] w-[100%]'>
                  <FieldSet
                     description='Vin'
                     cssProperties='w-[80%] lg:w-1/2'
                     labelProperties='text-2xl '
                  >
                     <InputTextForm
                        register={register}
                        name='vin'
                        placeholders='5cv2427sdaeq38'
                     />
                     <ErrorPost error={errors.vin?.type}>
                        * Vin is required
                     </ErrorPost>
                  </FieldSet>
                  <FieldSet
                     description='Brand'
                     cssProperties='w-[80%] lg:w-1/2 text-base'
                     labelProperties='text-2xl '
                  >
                     <SelectPost register={register} name='brand'>
                        <option value=''>Select brand</option>
                        {autoBrands.map((e, i) => (
                           <option key={i} value={e}>
                              {e}
                           </option>
                        ))}
                     </SelectPost>
                     <ErrorPost error={errors.brand?.type}>
                        * Brand is required
                     </ErrorPost>
                  </FieldSet>
                  <FieldSet
                     description='Auto model'
                     cssProperties='w-[80%] lg:w-1/2'
                     labelProperties='text-2xl '
                  >
                     <InputTextForm
                        register={register}
                        name='model'
                        placeholders='A4, Series1, Qasqai'
                     />
                     <ErrorPost error={errors.model?.type}>
                        * Model is required
                     </ErrorPost>
                  </FieldSet>
                  <FieldSet
                     description='Chassis'
                     cssProperties='w-[80%] lg:w-1/2'
                     labelProperties='text-2xl '
                  >
                     <SelectPost register={register} name='type'>
                        <option value=''>Select chassis</option>
                        <option value='Cars'>Car</option>
                        <option value='SUV'>Suv</option>
                        <option value='Trucks'>Truck</option>
                     </SelectPost>
                     <ErrorPost error={errors.type?.type}>
                        * Chassis is required
                     </ErrorPost>
                  </FieldSet>
                  <FieldSet
                     description='Year of manufacture'
                     cssProperties='w-[80%] lg:w-1/2'
                     labelProperties='text-2xl '
                  >
                     <InputTextForm
                        type='number'
                        register={register}
                        name='manufactureYear'
                        placeholders='2024'
                     />
                     <ErrorPost error={errors.manufactureYear?.type}>
                        * Manufacture year is required
                     </ErrorPost>
                  </FieldSet>
                  <FieldSet
                     description='kilometers'
                     cssProperties='w-[80%] lg:w-1/2'
                     labelProperties='text-2xl '
                  >
                     <InputTextForm
                        type='number'
                        register={register}
                        name='kilometer'
                        placeholders='30000Km'
                     />
                     <ErrorPost error={errors.kilometer?.type}>
                        * Kilometers number is required
                     </ErrorPost>
                  </FieldSet>
                  <FieldSet
                     description='State'
                     cssProperties='w-[80%] lg:w-1/2'
                     labelProperties='text-2xl '
                  >
                     <SelectPost register={register} name='state'>
                        <option value=''>Select state</option>
                        <option value='new'>New</option>
                        <option value='used'>Used</option>
                     </SelectPost>
                     <ErrorPost error={errors.state?.type}>
                        * State is required
                     </ErrorPost>
                  </FieldSet>
                  <FieldSet
                     description='Price'
                     cssProperties='w-[80%] lg:w-1/2'
                     labelProperties='text-2xl '
                  >
                     <InputTextForm
                        type='number'
                        register={register}
                        name='price'
                        placeholders='20000€'
                     />
                     <ErrorPost error={errors.price?.type}>
                        * Price is required
                     </ErrorPost>
                  </FieldSet>
                  <FieldSet
                     description='Color'
                     cssProperties='w-[80%] lg:w-1/2'
                     labelProperties='text-2xl '
                  >
                     <SelectPost register={register} name='color'>
                        <option value=''>Select color</option>
                        {colorArray.map((el, idx) => (
                           <option value={el.toLowerCase()} key={idx}>
                              {el}
                           </option>
                        ))}
                     </SelectPost>
                     <ErrorPost error={errors.color?.type}>
                        * Color is required
                     </ErrorPost>
                  </FieldSet>
               </ContainerColumn>
               <div>
                  <FieldSet
                     description='Auto Picture'
                     cssProperties='w-full h-[300px] bg-orange-100 justify-start border border-black p-12 mb-22 rounded-xl bg-[url("https://www.transparenttextures.com/patterns/brushed-alum.png")] lg:w-full'
                  >
                     <InputTextForm type='file' register={register} name='picture' />
                     <ErrorPost
                        error={errors.picture?.type}
                        className='absolute bottom-0'
                     >
                        * Picture is required
                     </ErrorPost>
                  </FieldSet>
               </div>
               <Button
                  properties='relative  duration-600 w-1/3 bg-transparent border-none outline outline-4 outline-blue-300 font-medium text-xl hover:scale-110 focus:scale-110 hover:outline-white hover:bg-blue-400 focus:bg-blue-400 hover:font-bold hover:outline hover:outline-blue-800 hover:text-white xl:w-1/3 lg:w-1/2 md:w-1/2'
                  isLink={false}
               >
                  Post new auto
                  {loading && <Loader properties=' -top-8 left-[46%]' />}
               </Button>
            </form>
            {res && <Toast handle={res}>Auto posted</Toast>}
         </div>
      </>
   )
}

export default PostAuto

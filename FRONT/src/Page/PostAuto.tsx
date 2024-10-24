import { useForm } from "react-hook-form"
import Button from "../Components/atoms/Button"
import FieldSet from "../Components/atoms/FieldSet"
import { autoBrands } from "../data/autoBrands"
import { colorArray } from "../data/colorArray"
import ErrorPost from "../Components/atoms/ErrorPost"
import InputTextForm from "../Components/atoms/InputTextForm"
import SelectPost from "../Components/atoms/SelectPost"
import ContainerColumn from "../Components/atoms/ContainerColumn"
import { useEffect, useState } from "react"
import { PostAutoType } from "../utils/types"

const PostAuto = () => {
   const [token, setToken] = useState<string | null>(localStorage.getItem("token"))

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

   useEffect(() => {
      setToken(localStorage.getItem("token"))
   }, [])
   const submitFunction = (data: PostAutoType) => {
      const formData = new FormData()

      formData.append("vin", data.vin)
      formData.append("brand", data.brand)
      formData.append("model", data.model)
      formData.append("type", data.type)
      formData.append("manufactureYear", data.manufactureYear)
      formData.append("kilometer", data.kilometer)
      formData.append("state", data.state)
      formData.append("price", data.price)
      formData.append("color", data.color)
      formData.append("availability", "Disponible")
      formData.append("picture", data.picture[0])
      console.log(data.picture[0])
      console.log(data)

      fetch("http://localhost:3000/autos/v1/search", {
         method: "POST",
         headers: {
            Authorization: "Bearer " + token,
         },
         body: formData,
      })
         .then(res => res.json())
         .then(res => {
            console.log(res)
         })
      console.log(formData)
      console.log(token)

      reset()
   }
   return (
      <div className='bg-blue-200 min-h-screen p-6 border border-black'>
         <form
            action=''
            className='flex flex-wrap gap-10 justify-center items-center content-center flex-wrap'
            onSubmit={handleSubmit(submitFunction)}
         >
            <ContainerColumn className=' bg-slate-400 items-center p-6 rounded-xl bg-[url("https://www.transparenttextures.com/patterns/brushed-alum.png")] lg:w-1/2 sm:w-[80%]'>
               <FieldSet description='Vin' cssProperties='w-[80%] lg:w-1/2'>
                  <InputTextForm
                     register={register}
                     name='vin'
                     placeholders='5cv2427sdaeq38'
                  />
                  <ErrorPost error={errors.vin?.type}>* Vin is required</ErrorPost>
               </FieldSet>
               <FieldSet description='Brand' cssProperties='w-[80%] lg:w-1/2'>
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
               <FieldSet description='Auto model' cssProperties='w-[80%] lg:w-1/2'>
                  <InputTextForm
                     register={register}
                     name='model'
                     placeholders='A4, Series1, Qasqai'
                  />
                  <ErrorPost error={errors.model?.type}>
                     * Model is required
                  </ErrorPost>
               </FieldSet>
               <FieldSet description='Chassis' cssProperties='w-[80%] lg:w-1/2'>
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
               <FieldSet description='kilometers' cssProperties='w-[80%] lg:w-1/2'>
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
               <FieldSet description='State' cssProperties='w-[80%] lg:w-1/2'>
                  <SelectPost register={register} name='state'>
                     <option value=''>Select state</option>
                     <option value='new'>New</option>
                     <option value='used'>Used</option>
                  </SelectPost>
                  <ErrorPost error={errors.state?.type}>
                     * State is required
                  </ErrorPost>
               </FieldSet>
               <FieldSet description='Price' cssProperties='w-[80%] lg:w-1/2'>
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
               <FieldSet description='Color' cssProperties='w-[80%] lg:w-1/2'>
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
               properties='transition-all duration-600 w-1/3 bg-transparent border-none outline outline-4 outline-blue-300 font-medium text-xl hover:scale-110 focus:scale-110 hover:outline-white hover:bg-blue-400 focus:bg-blue-400 hover:font-bold hover:outline hover:outline-blue-800 hover:text-white xl:w-1/3 lg:w-1/2 md:w-1/2'
               isLink={false}
            >
               Post new auto
            </Button>
         </form>
      </div>
   )
}

export default PostAuto

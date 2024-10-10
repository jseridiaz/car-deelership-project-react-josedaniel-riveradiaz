import { useForm } from "react-hook-form"
import Button from "../Components/atoms/Button"
import FieldSet from "../Components/atoms/FieldSet"
import { autoBrands } from "../data/autoBrands"
import { colorArray } from "../data/colorArray"
import ErrorPost from "../Components/atoms/ErrorPost"
import InputTextForm from "../Components/atoms/InputTextForm"
import SelectPost from "../Components/atoms/SelectPost"

const PostAuto = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      defaultValues: {
         brand: "",
         model: "",
         type: "",
         manufactureYear: "",
         kilometer: "",
         state: "",
         price: "",
         availability: "Disponible",
         picture: "",
         color: "",
      },
   })
   const submitFunction = data => {
      fetch("http://localhost:3000/post", { method: "POST", headers })
         .then(res => res.json())
         .then(res => {
            console.log(res)
         })
      reset()
   }
   return (
      <div className='bg-blue-200 min-h-screen p-6 border border-black'>
         <form
            action=''
            className='flex gap-10 justify-center items-center content-center flex-wrap'
            onSubmit={handleSubmit(submitFunction)}
         >
            <div className='w-1/2'>
               <FieldSet description='Brand' cssProperties='w-1/2'>
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
               <FieldSet description='Auto model' cssProperties='w-1/2'>
                  <InputTextForm
                     register={register}
                     name='model'
                     placeholders='A4, Series1, Qasqai'
                  />
                  <ErrorPost error={errors.model?.type}>
                     * Model is required
                  </ErrorPost>
               </FieldSet>
               <FieldSet description='Chassis' cssProperties='w-1/2'>
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
               <FieldSet description='Year of manufacture' cssProperties='w-1/2'>
                  <InputTextForm
                     register={register}
                     name='manufactureYear'
                     placeholders='2024'
                  />
                  <ErrorPost error={errors.manufactureYear?.type}>
                     * Manufacture year is required
                  </ErrorPost>
               </FieldSet>
               <FieldSet description='kilometers' cssProperties='w-1/2'>
                  <InputTextForm
                     register={register}
                     name='kilometer'
                     placeholders='30000Km'
                  />
                  <ErrorPost error={errors.kilometer?.type}>
                     * Kilometers number is required
                  </ErrorPost>
               </FieldSet>
               <FieldSet description='State' cssProperties='w-1/2'>
                  <SelectPost register={register} name='state'>
                     <option value=''>Select state</option>
                     <option value='new'>New</option>
                     <option value='used'>Used</option>
                  </SelectPost>
                  <ErrorPost error={errors.state?.type}>
                     * State is required
                  </ErrorPost>
               </FieldSet>
               <FieldSet description='Price' cssProperties='w-1/2'>
                  <InputTextForm
                     register={register}
                     name='price'
                     placeholders='20000€'
                  />
                  <ErrorPost error={errors.price?.type}>
                     * Price is required
                  </ErrorPost>
               </FieldSet>
               <FieldSet description='Color' cssProperties='w-1/2'>
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
            </div>
            <div>
               <FieldSet
                  description='Auto Picture'
                  cssProperties='w-full h-[300px] bg-orange-100 justify-start border border-black p-12 mb-22 rounded-xl'
               >
                  <input
                     className=' cursor-pointer relative top-12 bg-blue-100 border border-black self-center '
                     type='file'
                     {...register("picture", { required: true })}
                  />
                  <ErrorPost
                     error={errors.picture?.type}
                     className='absolute bottom-0'
                  >
                     * Picture is required
                  </ErrorPost>
               </FieldSet>
            </div>
            <Button
               properties='transition-all duration-600 w-1/4 bg-transparent border-none outline outline-4 outline-blue-600  font-medium text-xl hover:scale-110 focus:scale-110 hover:bg-blue-600 focus:bg-blue-600 hover:font-bold hover:outline hover:outline-blue-800 hover:text-white	'
               link={false}
            >
               Post new auto
            </Button>
         </form>
      </div>
   )
}

export default PostAuto

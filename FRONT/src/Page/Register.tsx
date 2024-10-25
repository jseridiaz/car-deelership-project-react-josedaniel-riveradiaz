import { useForm } from "react-hook-form"
import Button from "../Components/atoms/Button"
import ImgComponent from "../Components/atoms/ImgComponent"
import FieldSet from "../Components/atoms/FieldSet"
import { IFormInput } from "../utils/types"
import ErrorContainer from "../Components/atoms/ErrorContainer"
import InputTextForm from "../Components/atoms/InputTextForm"
import { useState } from "react"
import Loader from "../Components/atoms/Loader"
import { useNavigate } from "react-router-dom"
import Toast from "../Components/molecules/Toast"
import Seo from "../Components/molecules/Seo"

const Register = () => {
   const [loading, setLoading] = useState<boolean>(false)
   const [showToast, setShowToast] = useState<boolean>(false)
   // const [message,setMessage]=useState<string>()
   const navigate = useNavigate()

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<IFormInput>({
      defaultValues: {
         firstname: "",
         surname: "",
         email: "",
         birthdate: "",
         password: "",
      },
   })

   const handleRegister = (data: IFormInput): void => {
      setLoading(true)
      fetch("https://carseller-back-josedaniel.vercel.app/autos/v1/user/register", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            name: data.firstname,
            surname: data.surname,
            age: data.birthdate.split("-").join("/"),
            email: data.email,
            password: data.password,
            favourites: data.autosInterested,
         }),
      }).then(res => {
         setLoading(false)
         if (res.ok) setShowToast(true)
         setTimeout(() => {
            setShowToast(false)
            navigate("/login")
         }, 3000)
         return res.json()
      })

      console.log(
         JSON.stringify({
            name: data.firstname,
            surname: data.surname,
            age: data.birthdate.split("-").join("/"),
            email: data.email,
            password: data.password,
            favourites: data.autosInterested,
         }),
      )
   }
   return (
      <>
         <Seo
            title='Register page ◀️ - Car seller'
            description='Set your personal datas to get access free in your private page and take a lot of advantages like offers and disccounts, as well as  be able to find out about the latest stocks firts.'
            url='https://carseller-for-you.vercel.app/register'
            img='https://res.cloudinary.com/ddybbosdk/image/upload/v1726571808/CARS%20AUTODEELER/ram-portrait-register_1_qyb1im.avif'
         />
         <article className=' flex justify-around p-10 bg-blue-200 '>
            <article className='md:w-[38%] w-full'>
               <form
                  action=''
                  className='border-2 border-black p-4 rounded-2xl flex flex-col gap-7 bg-indigo-50'
                  onSubmit={handleSubmit(handleRegister)}
               >
                  <div className='flex flex-col gap-2 px-8'>
                     <h2 className='self-start text-3xl font-bold'>Sign in</h2>
                     <p className='self-start text-gray-400 mt-4 sm:mt-0'>
                        Create your account in seconds
                     </p>
                  </div>
                  <div className='flex flex-col items-center gap-6'>
                     <FieldSet description='Your name' cssProperties='w-2/3'>
                        <InputTextForm
                           register={register}
                           name='firstname'
                           // className='p-2 text-sm w-full  border-2 border-gray-500 border-solid placeholder:text-sm rounded  focus:border-none focus:outline-8 focus:outline-blue-300 focus:outline-offset-4'
                           // id='firstname-input'
                           placeholders='Jose'
                           // {...register("firstname", { required: true })}
                        />
                        <ErrorContainer>
                           {errors.firstname?.type === "required" &&
                              "* First name is required"}
                        </ErrorContainer>
                     </FieldSet>
                     <FieldSet description='Your surname' cssProperties='w-2/3'>
                        <InputTextForm
                           register={register}
                           placeholders='Rivera'
                           name='surname'
                        />
                        <ErrorContainer>
                           {errors.surname?.type === "required" &&
                              "* Surname is required"}
                        </ErrorContainer>
                     </FieldSet>
                     <FieldSet description='Your email' cssProperties='w-2/3'>
                        <InputTextForm
                           register={register}
                           placeholders='jose@gmail.com'
                           name='email'
                        />
                        <ErrorContainer>
                           {errors.email?.type === "required" &&
                              "* Email is required"}
                        </ErrorContainer>
                     </FieldSet>
                     <FieldSet description='Your birthname' cssProperties='w-2/3'>
                        <InputTextForm
                           register={register}
                           type='date'
                           name='birthdate'
                        />
                        <ErrorContainer>
                           {errors.birthdate?.type === "required" &&
                              "* Your birthdate is required"}
                        </ErrorContainer>
                     </FieldSet>
                     <FieldSet description='Your password' cssProperties='w-2/3'>
                        <input
                           type='password'
                           className='p-2 text-sm w-full  border-2 border-gray-500 border-solid placeholder:text-sm rounded  focus:border-none focus:outline-8 focus:outline-blue-300 focus:outline-offset-4'
                           id='password-input-register'
                           autoComplete='off'
                           placeholder='*******'
                           {...register("password", {
                              required: {
                                 value: true,
                                 message: "* The password is required",
                              },
                              pattern: {
                                 value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&<>.])[A-Za-z\d@$!%*?&<>.]{7,}$/,
                                 message:
                                    "The password must contain a lowercase, Uppercase,a number and a special character",
                              },
                           })}
                        />
                        <ErrorContainer errors={`${errors.password?.type}`}>
                           {errors.password && errors.password.message}
                        </ErrorContainer>
                     </FieldSet>

                     <div className='relative p-4 flex gap-4 justify-center '>
                        <label htmlFor='interested'>Interested on:</label>
                        <select
                           className='bg-slate-200 rounded '
                           id='interested'
                           {...register("autosInterested")}
                        >
                           <option value='cars'>Cars</option>
                           <option value='SUV'>SUVs</option>
                           <option value='Truck'>Trucks</option>
                        </select>
                     </div>
                  </div>
                  <Button
                     isLink={false}
                     properties='transition-all relative duration-300 relative bg-indigo-500 hover:bg-indigo-600 hover:font-bold text-white w-1/2 self-center '
                  >
                     Sign in
                     {loading && <Loader />}
                  </Button>
               </form>
            </article>
            <ImgComponent
               imgPath='https://res.cloudinary.com/ddybbosdk/image/upload/v1726571808/CARS%20AUTODEELER/ram-portrait-register_1_qyb1im.avif'
               alt='Ram-portrait-toronto'
               classContainer='w-[60%] h-full hidden md:block'
               classImg='w-full h-full object-cover object-center'
            />
         </article>
         {showToast && <Toast>You've been already registered</Toast>}
      </>
   )
}

export default Register

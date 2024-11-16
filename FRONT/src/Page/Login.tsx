import { Link, useNavigate } from "react-router-dom"
import Button from "../Components/atoms/Button"
import ImgComponent from "../Components/atoms/ImgComponent"
import { useForm } from "react-hook-form"
import FieldSet from "../Components/atoms/FieldSet"
import { ExtendedIFormInput, IFormLogin } from "../utils/types"
import { useContext, useState } from "react"
import { LoggedContext } from "../Components/Providers/GlobalLogged"
import H2SingleComponent from "../Components/atoms/H2SingleComponent"
import Loader from "../Components/atoms/Loader"
import Toast from "../Components/molecules/Toast"
import { turnOffBanner } from "../utils/turnOffBanner"
import { BsArrowDownLeft } from "react-icons/bs"
import Parraf from "../Components/molecules/Parraf"
import Seo from "../Components/molecules/Seo"
import fetchLoginUser from "../utils/functions/fetch/fetchLoginUser"
import { TokenContext } from "../Components/Providers/GlobalToken"
import useLoading from "../Components/customHooks/useLoading"

const Login = () => {
   const { setLogged } = useContext(LoggedContext)
   const { setToken } = useContext(TokenContext)
   const [statusFetch, setStatusFetch] = useState<boolean>()
   const [fetchState, setFetchState] = useState<ExtendedIFormInput | null>()
   const { loading, changeLoading, setLoading } = useLoading()
   const [banner, setBanner] = useState<boolean>(false)

   const navigate = useNavigate()
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ defaultValues: { email: "", password: "", savedToken: false } })

   const handleLogin = (data: IFormLogin): void => {
      setFetchState(null)
      changeLoading()

      fetchLoginUser(data)
         .then(res => {
            setStatusFetch(res.ok)
            if (!res.ok) {
               turnOffBanner(setBanner, 4000, false)
               changeLoading()
            }
            return res.json()
         })
         .then(resJson => {
            setFetchState(resJson)

            setBanner(true)
            if (resJson.res.logged) resJson.res.logged.password = null

            setLoading(false)
            if (data.savedToken) {
               localStorage.setItem("token", resJson.res.token)
               localStorage.setItem("idUser", resJson.res.logged._id)
               localStorage.setItem("userInfo", JSON.stringify(resJson.res.logged))
               setLogged(resJson.res.logged._id)
               setToken(resJson.res.token)

               setTimeout(() => {
                  navigate("/home")
               }, 3000)
            } else {
               sessionStorage.setItem("token", resJson.res.token)
               sessionStorage.setItem("logged", resJson.res.logged._id)
               sessionStorage.setItem("userInfo", JSON.stringify(resJson.res.logged))
               setLogged(resJson.res.logged._id)
               setToken(resJson.res.token)
               setTimeout(() => {
                  navigate("/home")
               }, 3000)
            }
         })
   }

   return (
      <>
         <Seo
            title='Login page - Car seller'
            description='Get in in your personal page by logging with your datas and take advantages like offers and disccounts, as well as find out about the latest stocks firts.'
            url='https://carseller-for-you.vercel.app/login'
            img='https://res.cloudinary.com/ddybbosdk/image/upload/v1726562162/CARS%20AUTODEELER/corvete-portrait-login_xoru7n.webp'
         />
         <article className='flex justify-around px-6 py-2 bg-slate-100  '>
            <ImgComponent
               imgPath='https://res.cloudinary.com/ddybbosdk/image/upload/v1726562162/CARS%20AUTODEELER/corvete-portrait-login_xoru7n.webp'
               alt='corvete-portrait-login'
               classContainer='hidden md:block h-full w-[60%]'
               classImg='h-full w-full '
            />
            <article className='flex w-full md:w-1/2 h-[550px] justify-center items-center flex-wrap'>
               <H2SingleComponent cssProperties='w-full text-5xl h-fit font-extrabold relative top-2'>
                  Log in
               </H2SingleComponent>
               <form
                  action='#'
                  method='post'
                  className='relative flex flex-col w-[90%] h-[85%] p-4 justify-around items-center border-2 border-black border-solid rounded-xl bg-blue-50'
                  onSubmit={handleSubmit(handleLogin)}
               >
                  <FieldSet description='Email' cssProperties='w-full'>
                     <input
                        type='text'
                        autoComplete='on'
                        placeholder='jose@gmail.com'
                        className='p-2 text-sm border-2 w-[80%] border-gray-500 border-solid placeholder:text-sm rounded'
                        {...register("email", {
                           required: {
                              value: true,
                              message: "* Email adresse is required",
                           },
                           pattern: {
                              value: /^[\w.-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$/,
                              message: "The email doesn't pass with a valid email",
                           },
                        })}
                     />
                     {errors.email && (
                        <Parraf cssProperties='relative -bottom-2 right-1/2 translate-x-1/2 font-normal text-sm w-full text-red-600'>
                           {errors.email.type === "required" && errors.email.message}
                        </Parraf>
                     )}
                  </FieldSet>
                  <FieldSet description='Password' cssProperties='w-full'>
                     <input
                        type='password'
                        placeholder='*******'
                        className='p-2 text-sm border-2 w-[80%] border-gray-500 border-solid placeholder:text-sm rounded'
                        {...register("password", {
                           required: "Password is required",
                           pattern: {
                              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&<>.])[A-Za-z\d@$!%*?&<>.]{7,}$/,
                              message:
                                 "The password must contain a lowercase, Uppercase, a number, a special character and at least 7 characters",
                           },
                        })}
                     />
                     {errors.password && (
                        <Parraf
                           cssProperties={`relative text-sm w-[100%] right-1/2 translate-x-1/2 text-red-600`}
                        >
                           {errors.password.type === "pattern"
                              ? "* Password must contain a lowercase, uppercase, number, special character and 7 characters "
                              : errors.password.type === "required"
                              ? "* The password is required"
                              : null}
                        </Parraf>
                     )}
                  </FieldSet>
                  <div className=' flex justify-between gap-4 mt-7 '>
                     <div className='flex gap-2 items-center flex-wrap'>
                        <div className='flex outline-none hover:outline-2 border-none  hover:outline-offset-2 hover:outline-blue-600 rounded flex-wrap'>
                           <input
                              type='checkbox'
                              className='w-4 h-4  '
                              id='checkbox-save-log'
                              {...register("savedToken")}
                           />
                        </div>
                        <label htmlFor='checkbox-save-log' className='min-w-36'>
                           Keep me logged in
                        </label>
                     </div>
                  </div>
                  <Button
                     properties='relative min-w-[125px] sm:w-1/3 w-2/3 h-[50px] hover:shadow-md bg-purple-500 text-white font-semibold'
                     isLink={false}
                  >
                     Log in
                     {/* {loading && <Loader properties='top-0 right-1/2' />} */}
                  </Button>

                  <Link
                     className='flex gap-1 text-purple-600 hover:text-blue-400 p-1 focus:outline-none animate-pulse'
                     to='/register'
                  >
                     Haven't you yet an account?
                     <BsArrowDownLeft className=' scale-125' />
                  </Link>
                  {loading && (
                     <Loader properties='bottom-16  min-[350px]:right-[45%] right-[40%] ' />
                  )}
               </form>
            </article>
         </article>
         {banner && fetchState ? (
            <Toast handle={statusFetch}>{fetchState.message}</Toast>
         ) : null}
      </>
   )
}

export default Login

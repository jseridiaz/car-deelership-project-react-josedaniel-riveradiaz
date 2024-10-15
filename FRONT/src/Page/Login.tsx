import { Link, useNavigate } from "react-router-dom"
import Button from "../Components/atoms/Button"
import ImgComponent from "../Components/atoms/ImgComponent"
import { useForm } from "react-hook-form"
import FieldSet from "../Components/atoms/FieldSet"
import { ExtendedIFormInput, IFormLogin } from "../utils/types"
import { useContext, useState } from "react"
import { TokenContext } from "../Components/Providers/GlobalToken"
import { LoggedContext } from "../Components/Providers/GlobalLogged"
import H2SingleComponent from "../Components/atoms/H2SingleComponent"

const Login = () => {
   const { setToken } = useContext(TokenContext)
   const { logged, setLogged } = useContext(LoggedContext)
   const [statusFetch, setStatusFetch] = useState<boolean>()
   const [fetchState, setFetchState] = useState<ExtendedIFormInput | null>()

   const navigate = useNavigate()
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({ defaultValues: { email: "", password: "", savedToken: null } })

   const handleLogin = (data: IFormLogin): void => {
      console.log(data)

      fetch("http://localhost:3000/autos/v1/user/login", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            email: data.email,
            password: data.password,
            savedToken: data.savedToken,
         }),
      })
         .then(res => {
            console.log(res)
            setStatusFetch(res.ok)

            return res.json()
         })
         .then(resJson => {
            resJson.res.logged.password = null
            console.log(resJson.res.logged)

            setFetchState(resJson)

            if (resJson.res.token) {
               console.log(resJson)
               console.log(JSON.stringify(resJson.res.logged))

               localStorage.setItem("token", resJson.res.token)
               localStorage.setItem("idUser", resJson.res.logged._id)
               localStorage.setItem("userInfo", JSON.stringify(resJson.res.logged))

               setToken(localStorage.getItem("token"))
               navigate("/home")
            } else {
               sessionStorage.setItem("logged", resJson.res.logged._id)
               sessionStorage.setItem("userInfo", JSON.stringify(resJson.res.logged))
               setLogged(sessionStorage.getItem("logged"))
               navigate("/home")

               {
                  console.log(logged)
               }
            }
         })
   }

   return (
      <>
         <article className='flex justify-around px-6 py-2 '>
            <ImgComponent
               imgPath='https://res.cloudinary.com/ddybbosdk/image/upload/v1726562162/CARS%20AUTODEELER/corvete-portrait-login_xoru7n.webp'
               alt='corvete-portrait-login'
               classContainer='h-full w-[60%]'
               classImg='h-full w-full '
            />
            <article className='flex w-1/2 h-[550px] justify-center items-center flex-wrap'>
               <H2SingleComponent cssProperties='w-full text-5xl h-fit font-extrabold relative top-2'>
                  Log in
               </H2SingleComponent>
               <form
                  action='#'
                  method='post'
                  className=' flex flex-col w-[90%] h-[85%] p-4 justify-around items-center border-2 border-black border-solid rounded-xl bg-blue-50'
                  onSubmit={handleSubmit(handleLogin)}
               >
                  <FieldSet description='Email'>
                     <input
                        type='text'
                        autoComplete='on'
                        placeholder='jose@gmail.com'
                        className='p-2 text-sm border-2 border-gray-500 border-solid placeholder:text-sm rounded'
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
                        <p className='absolute -bottom-2 right-1/2 translate-x-1/2 font-normal text-sm w-full text-red-600'>
                           {errors.email.type === "required" && errors.email.message}
                        </p>
                     )}
                  </FieldSet>
                  <FieldSet description='Password'>
                     <input
                        type='password'
                        placeholder='*******'
                        className='p-2 text-sm border-2 border-gray-500 border-solid placeholder:text-sm rounded'
                        {...register("password", {
                           required: "Password is required",
                           pattern: {
                              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&<>.])[A-Za-z\d@$!%*?&<>.]{7,}$/,
                              message:
                                 "The password must contain a lowercase, Uppercase,a number and a special character",
                           },
                        })}
                     />
                     {errors.password && (
                        <p
                           className={`absolute ${
                              errors.password.type === "pattern"
                                 ? "-bottom-7"
                                 : "-bottom-2"
                           } text-sm w-[140%] right-1/2 translate-x-1/2 text-red-600`}
                        >
                           {errors.password.type === "pattern"
                              ? "* Password must contain a lowercase, uppercase, number, special character and 7 characters "
                              : errors.password.type === "required"
                              ? "* The password is required"
                              : null}
                        </p>
                     )}
                  </FieldSet>
                  {fetchState && fetchState.message ? (
                     <p
                        className={`absolute bottom-1/3 ${
                           statusFetch ? "text-green-500" : "text-red-600"
                        } font-medium`}
                     >
                        {fetchState.message}
                     </p>
                  ) : null}
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
                     <span className='text-purple-400 m-w-36'>Forget password?</span>
                  </div>
                  <Button
                     properties='w-1/3 h-[50px] hover:shadow-md bg-purple-500 text-white font-semibold'
                     isLink={false}
                  >
                     Log in
                  </Button>
                  <Link
                     className='text-purple-600 hover:text-blue-400 p-1 focus:outline-none'
                     to='/register'
                  >
                     Haven't you yet an account?
                  </Link>
               </form>
            </article>
         </article>
      </>
   )
}

export default Login

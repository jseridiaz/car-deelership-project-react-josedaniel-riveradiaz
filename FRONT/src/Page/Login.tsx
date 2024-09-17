import { Link } from "react-router-dom"
import Button from "../Components/atoms/Button"
import ImgComponent from "../Components/atoms/ImgComponent"
import InputForm from "../Components/atoms/InputForm"

const Login = () => {
   const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log("ok")
   }
   return (
      <>
         <article className='flex justify-around px-6 py-2 '>
            <ImgComponent
               imgPath='https://res.cloudinary.com/ddybbosdk/image/upload/v1726562162/CARS%20AUTODEELER/corvete-portrait-login_xoru7n.webp'
               alt='corvete-portrait-login'
               classContainer='h-full w-[60%]'
               classImg='h-full w-full'
            />
            <article className='flex w-1/2 bg-white h-[550px] justify-center items-center flex-wrap'>
               <h2 className='w-full text-5xl h-fit font-extrabold relative top-2'>
                  Log in
               </h2>
               <form
                  action='#'
                  method='post'
                  className=' flex flex-col w-[65%] h-[85%] p-4 justify-around items-center border-2 border-black border-solid rounded-xl bg-blue-50'
                  onSubmit={handlesubmit}
               >
                  <InputForm
                     id='userName-input'
                     placeholder='Username'
                     name='name'
                     auto={true}
                  />
                  <InputForm
                     id='email-input'
                     placeholder='Email'
                     name='email'
                     auto={true}
                  />
                  <InputForm
                     id='password-input'
                     placeholder='Password'
                     name='password'
                     auto={false}
                  />
                  <div className='flex justify-between gap-4 mt-7 '>
                     <div className='flex gap-2 items-center flex-wrap'>
                        <div className='flex outline-none hover:outline-2 border-none  hover:outline-offset-2 hover:outline-blue-600 rounded flex-wrap'>
                           <input
                              type='checkbox'
                              className='w-4 h-4  '
                              id='checkbox-save-log'
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
                     link={false}
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

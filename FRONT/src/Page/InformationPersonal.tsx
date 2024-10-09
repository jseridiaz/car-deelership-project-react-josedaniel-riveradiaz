import { useEffect, useState } from "react"
import Button from "../Components/atoms/Button"
import ContainerColumn from "../Components/atoms/ContainerColumn"
import H2SingleComponent from "../Components/atoms/H2SingleComponent"

const InformationPersonal = () => {
   const [idUser, setIdUser] = useState<string | null>(
      localStorage.getItem("idUser") ?? sessionStorage.getItem("logged"),
   )
   // useEffect(()=>{fetch("")})
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log(e)
   }
   return (
      <ContainerColumn className='bg-slate-200 min-h-screen items-center'>
         <H2SingleComponent cssProperties='text-4xl font-bold mt-6 p-6 bg-blue-400 w-fit rounded-full'>
            Personal infomation
         </H2SingleComponent>
         <div className='flex'>
            <form
               action=''
               onSubmit={e => {
                  handleSubmit(e)
               }}
            >
               <Button link={false} properties='bg-white'>
                  Change Information
               </Button>
            </form>
            <ContainerColumn className=''>d</ContainerColumn>
         </div>
      </ContainerColumn>
   )
}

export default InformationPersonal

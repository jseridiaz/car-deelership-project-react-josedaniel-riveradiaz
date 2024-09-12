import { homeServices } from "../../../data/services"
import H2Component from "../../atoms/H2Component"
import InfoCard from "../../atoms/InfoCard"

const OurService = () => {
   return (
      <section className='bg-blue-200 p-10 flex flex-col justify-between gap-10 h-[500px]'>
         <H2Component title='Our Service' />
         <p className='font-medium text-gray-500 text-xl'>
            We provide many of the best services for you and you will get the best
            benefits here{" "}
         </p>
         <div className='flex justify-center gap-20'>
            {homeServices.map((el, idx) => (
               <InfoCard
                  key={idx}
                  title={el.title}
                  description={el.description}
                  img={el.img}
               />
            ))}
         </div>
      </section>
   )
}

export default OurService

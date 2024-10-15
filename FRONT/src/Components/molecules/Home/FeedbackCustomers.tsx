import { feedbackCustomers } from "../../../data/Feedback"
import H2Component from "../../atoms/H2Component"
import FeedbackBox from "../../FeedbackBox"

const FeedbackCustomers = () => {
   return (
      <section className='p-10 bg-blue-200'>
         <H2Component>Our Customer feedback</H2Component>
         <div className='flex w-full justify-center gap-14 mt-24 items-stretch flex-wrap'>
            {feedbackCustomers.map((el, idx) => (
               <FeedbackBox
                  key={idx}
                  nameCustomer={el.name}
                  carBougth={el.bought}
                  imgProfil={el.img}
                  altInfo={el.alt}
                  rating={el.rating}
               />
            ))}
         </div>
      </section>
   )
}

export default FeedbackCustomers

import ImgComponent from "./atoms/ImgComponent"
type FeedbackBoxType = {
   nameCustomer: string
   carBougth: string
   imgProfil: string
   altInfo: string
   rating: string
}
const FeedbackBox: React.FC<FeedbackBoxType> = ({
   nameCustomer,
   carBougth,
   imgProfil,
   altInfo,
   rating,
}) => {
   return (
      <div className='transition-all grow duration-700 w-1/4 min-w-[25%] flex flex-col h-[300px] gap-5 p-6 rounded-xl bg-white justify-around hover:grow-2 '>
         <div
            className='flex w-full justify-center
         gap-5'
         >
            <ImgComponent
               imgPath={imgProfil}
               alt={altInfo}
               classContainer='rounded-full w-[60px] h-[60px] content-center bg-blue-700'
               classImg='object-cover w-full  h-full'
            />
            <div className='text-left'>
               <h3 className='font-semibold text-xl'>{nameCustomer}</h3>
               <p className='font-medium'>{`Bought: ${carBougth}`}</p>
            </div>
         </div>
         <p className='text-left'>{rating}</p>
      </div>
   )
}

export default FeedbackBox

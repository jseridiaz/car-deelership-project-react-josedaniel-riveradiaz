interface InfoCardtype {
   title?: string
   description: string
   img: JSX.Element
}
const InfoCard: React.FC<InfoCardtype> = ({ title, description, img }) => {
   return (
      <div className='flex flex-col gap-4 w-1/5 min-w-[200px] p-7 rounded-lg bg-white items-start'>
         {img}
         {title ? <h3 className='font-bold'>{title}</h3> : null}
         <p className='text-left line-clamp-4'>{description}</p>
      </div>
   )
}

export default InfoCard

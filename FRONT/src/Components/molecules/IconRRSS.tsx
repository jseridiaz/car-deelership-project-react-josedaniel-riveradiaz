interface IconRRSSType {
   hoverColor: string
   componentName: JSX.Element
}

const IconRRSS: React.FC<IconRRSSType> = ({ hoverColor, componentName }) => {
   return (
      <div
         className={`relative flex w-10 h-10 rounded-full items-center justify-center  hover:scale-125 transition duration-600 ${hoverColor}`}
      >
         <div className='z-10 w-[24px]  h-[25px] top-1/2 -translate-y-[46%] absolute bg-white'></div>
         {componentName}
      </div>
   )
}

export default IconRRSS

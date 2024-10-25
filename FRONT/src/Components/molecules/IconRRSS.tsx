interface IconRRSSType {
   hoverColor: string
   componentName: JSX.Element
   handleClick?: () => void
}

const IconRRSS: React.FC<IconRRSSType> = ({
   hoverColor,
   componentName,
   handleClick,
}) => {
   return (
      <div
         className={`relative flex w-10 h-10 rounded-full items-center justify-center  hover:scale-125 transition duration-600 ${hoverColor}`}
         onClick={handleClick}
      >
         <div className='z-10 w-[24px]  h-[25px] top-1/2 -translate-y-[46%] absolute bg-white'></div>
         {componentName}
      </div>
   )
}

export default IconRRSS

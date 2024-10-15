interface H2types {
   children: React.ReactNode
   colorTitle?: string
}

const H2Component: React.FC<H2types> = ({ children, colorTitle }) => {
   return (
      <div className='flex justify-center gap-3 items-center  '>
         <div className='flex bg-gray-400 w-1/4 h-0.5	'></div>
         <h2 className={`font-extrabold text-4xl ${colorTitle}`}>{children}</h2>
         <div className='flex bg-gray-400 w-1/4 h-0.5	'></div>
      </div>
   )
}

export default H2Component

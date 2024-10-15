import { Link } from "react-router-dom"
import ImgComponent from "./ImgComponent"
type BlogContainerTypes = {
   imgPath: string
   alt: string
   description: string
}
const BlogContainer: React.FC<BlogContainerTypes> = ({
   imgPath,
   alt,
   description,
}) => {
   return (
      <div className='relative flex  w-full sm:w-[70%] lg:w-[30%] min-w-[300px] h-[375px] cursor-pointer '>
         <Link to='' className=' text-xl text-black w-full h-full'>
            <ImgComponent
               imgPath={imgPath}
               alt={alt}
               classContainer='w-full h-[302px]'
               classImg='w-full h-full'
            />
            <p className='transition-all duration-500 w-full left-0 p-4 absolute bg-white rounded-2xl -bottom-2 text-start h-[140px] lg:h-[112px] font-semibold content-center hover:text-cyan-600 leading-10 md: '>
               {description}
            </p>
         </Link>
      </div>
   )
}

export default BlogContainer

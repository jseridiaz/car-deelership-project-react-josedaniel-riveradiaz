import { blogData } from "../../../data/blogsData"
import BlogContainer from "../../atoms/BlogContainer"
import H2Component from "../../atoms/H2Component"

const BlogsHome = () => {
   return (
      <section className='relative p-10 bg-gradient-to-b from-blue-200 to-slate-100'>
         <H2Component title='Blog' />
         <div className='flex justify-center gap-4 mt-14'>
            {blogData.map((el, idx) => (
               <BlogContainer
                  key={idx}
                  imgPath={el.imgPath}
                  description={el.description}
                  alt={el.alt}
               />
            ))}
         </div>
      </section>
   )
}

export default BlogsHome

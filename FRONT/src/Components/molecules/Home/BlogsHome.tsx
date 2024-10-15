import { blogData } from "../../../data/blogsData"
import BlogContainer from "../../atoms/BlogContainer"
import H2Component from "../../atoms/H2Component"

const BlogsHome = () => {
   return (
      <section className='relative p-10 bg-gradient-to-b from-blue-200 to-slate-100'>
         <H2Component>Blog</H2Component>
         <div className='flex flex-wrap justify-center lg:gap-4 gap-12 mt-14'>
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

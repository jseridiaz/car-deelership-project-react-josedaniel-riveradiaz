import H1Component from "../Components/atoms/H1Component"
import Parraf from "../Components/molecules/Parraf"
import H2SingleComponent from "../Components/atoms/H2SingleComponent"
import ImgComponent from "../Components/atoms/ImgComponent"
import ContainerColumn from "../Components/atoms/ContainerColumn"
import Seo from "../Components/molecules/Seo"

const About = () => {
   return (
      <>
         <Seo
            title='All about us - Car seller'
            description='All car seller history can be found here, along with our mission to support customers.'
            url='http://localhost:5173/about-us'
            img='/PorscheBlog.png'
         />
         <section className='p-4 flex flex-col gap-2 bg-blue-200 relative'>
            <H1Component>About Car Seller</H1Component>
            <H2SingleComponent
               h2Text='All about us'
               cssProperties='md:p-4 p-1 flex flex-col gap-2 relative mt-6'
            >
               <div className='bg-slate-50 flex flex-col relative rounded-2xl p-4'>
                  <Parraf cssProperties='text-left w-full lg:w-2/3 p-1 '>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                     quidem voluptas? Laudantium, incidunt debitis! Doloremque
                     tenetur provident nostrum aliquam, fuga ea dolores molestias
                     beatae eius a odio iusto cumque!
                  </Parraf>
                  <Parraf cssProperties='text-left w-full lg:w-2/3 p-1'>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                     quidem voluptas? Laudantium, incidunt debitis! Doloremque
                     tenetur provident nostrum aliquam, fuga ea dolores molestias
                     beatae eius a odio iusto cumque!ipsum dolor sit amet consectetur
                     adipisicing elit. Rerum, quidem voluptas? Laudantium, incidunt
                     debitis! Doloremque tenetur provident nostrum aliquam, fuga ea
                     dolores molestias beatae eius a odio iusto cumque!
                  </Parraf>
                  <Parraf cssProperties='text-left w-full lg:w-2/3 p-1'>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                     quidem voluptas? Laudantium, incidunt debitis! Doloremque
                     tenetur provident nostrum aliquam, fuga ea dolores molestias
                     beatae eius a odio iusto cumque!Lorem, ipsum dolor sit amet
                     consectetur adipisicing elit. Rerum, quidem voluptas?
                     Laudantium, incidunt debitis! Doloremque tenetur provident
                     nostrum aliquam, fuga ea dolores molestias beatae eius a odio
                     iusto cumque!
                  </Parraf>
                  <Parraf cssProperties='text-left w-full lg:w-2/3 p-1 lg:self-center '>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                     quidem voluptas? Laudantium, incidunt debitis! Doloremque
                     tenetur provident nostrum aliquam, fuga ea dolores molestias
                     beatae eius a odio iusto cumque!
                  </Parraf>
                  <ImgComponent
                     imgPath='/lagerCars.webp'
                     classContainer='relative lg:absolute right-0 top-0 lg:w-[29%] lg:h-[80%] lg:mt-0 mt-6 w-full lg:rounded-tr-2xl'
                     classImg='w-full h-full object-cover'
                     alt='collected-cars'
                  />
               </div>
            </H2SingleComponent>
            <H2SingleComponent
               h2Text="Car seller's mision"
               cssProperties='flex flex-wrap relative min-h-[340px] p-1 md:p-6 justify-center'
            >
               <div className='w-full flex flex-wrap justify-center'>
                  <ImgComponent
                     imgPath='/100quality.webp'
                     alt='100%-quality-brand'
                     classContainer='relative md:w-1/3 w-[60%] md:h-[100%] w-[80%] h-fit lg:h-[60%] self-center mt-6'
                     classImg='h-full w-full object-contain'
                  />
                  <ContainerColumn className='md:w-2/3 w-full '>
                     <Parraf cssProperties='text-left w-full self-end p-4 mt-8 bg-slate-50 rounded-t-3xl'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum, quidem voluptas? Laudantium, incidunt debitis!
                        Doloremque tenetur provident nostrum aliquam, fuga ea dolores
                        molestias beatae eius a odio iusto cumque!
                     </Parraf>
                     <Parraf cssProperties='text-left w-full self-end p-4 rounded-b-3xl bg-slate-50'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum, quidem voluptas? Laudantium, incidunt debitis!
                        Doloremque tenetur provident nostrum aliquam, fuga ea dolores
                        molestias beatae eius a odio iusto cumque! Lorem, ipsum dolor
                        sit amet consectetur adipisicing elit. Rerum, quidem
                        voluptas? Laudantium, incidunt debitis! Doloremque tenetur
                        provident nostrum aliquam, fuga ea dolores molestias beatae
                        eius a odio iusto cumque!
                     </Parraf>
                  </ContainerColumn>
               </div>
            </H2SingleComponent>
            <H2SingleComponent
               h2Text='Our customer reviews'
               cssProperties='flex flex-col relative p-6'
            >
               <Parraf cssProperties='text-left p-4 mt-8 bg-slate-100 rounded-t-2xl'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                  quidem voluptas? Laudantium, incidunt debitis! Doloremque tenetur
                  provident nostrum aliquam, fuga ea dolores molestias beatae eius a
                  odio iusto cumque!
               </Parraf>
               <Parraf cssProperties='text-left p-4 bg-slate-100 rounded-b-2xl'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                  quidem voluptas? Laudantium, incidunt debitis! Doloremque tenetur
                  provident nostrum aliquam, fuga ea dolores molestias beatae eius a
                  odio iusto cumque! Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Rerum, quidem voluptas? Laudantium, incidunt
                  debitis! Doloremque tenetur provident nostrum aliquam, fuga ea
                  dolores molestias beatae eius a odio iusto cumque!
               </Parraf>
            </H2SingleComponent>
         </section>
      </>
   )
}

export default About

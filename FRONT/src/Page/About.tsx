import H1Component from "../Components/atoms/icons/H1Component"
import Parraf from "../Components/molecules/Parraf"
import H2SingleComponent from "../Components/atoms/H2SingleComponent"
import ImgComponent from "../Components/atoms/ImgComponent"

const About = () => {
   return (
      <>
         <section className='p-4 flex flex-col gap-2 bg-blue-200 relative'>
            <H1Component>About Car Seller</H1Component>
            <H2SingleComponent
               h2Text='All about us'
               cssProperties='p-4 flex flex-col gap-2 relative mt-6'
            >
               <div className='bg-slate-50 flex flex-col relative rounded-2xl p-4'>
                  <Parraf cssProperties='text-left w-2/3 p-1 '>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                     quidem voluptas? Laudantium, incidunt debitis! Doloremque
                     tenetur provident nostrum aliquam, fuga ea dolores molestias
                     beatae eius a odio iusto cumque!
                  </Parraf>
                  <Parraf cssProperties='text-left w-2/3 p-1'>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                     quidem voluptas? Laudantium, incidunt debitis! Doloremque
                     tenetur provident nostrum aliquam, fuga ea dolores molestias
                     beatae eius a odio iusto cumque!ipsum dolor sit amet consectetur
                     adipisicing elit. Rerum, quidem voluptas? Laudantium, incidunt
                     debitis! Doloremque tenetur provident nostrum aliquam, fuga ea
                     dolores molestias beatae eius a odio iusto cumque!
                  </Parraf>
                  <Parraf cssProperties='text-left w-2/3 p-1'>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                     quidem voluptas? Laudantium, incidunt debitis! Doloremque
                     tenetur provident nostrum aliquam, fuga ea dolores molestias
                     beatae eius a odio iusto cumque!Lorem, ipsum dolor sit amet
                     consectetur adipisicing elit. Rerum, quidem voluptas?
                     Laudantium, incidunt debitis! Doloremque tenetur provident
                     nostrum aliquam, fuga ea dolores molestias beatae eius a odio
                     iusto cumque!
                  </Parraf>
                  <Parraf cssProperties='text-left w-2/3 p-1 self-center '>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                     quidem voluptas? Laudantium, incidunt debitis! Doloremque
                     tenetur provident nostrum aliquam, fuga ea dolores molestias
                     beatae eius a odio iusto cumque!
                  </Parraf>
                  <ImgComponent
                     imgPath='/lagerCars.webp'
                     classContainer='absolute right-0 top-0 w-[29%] h-[80%] rounded-tr-2xl'
                     classImg='w-full h-full object-cover'
                     alt='collected-cars'
                  />
               </div>
            </H2SingleComponent>
            <H2SingleComponent
               h2Text="Car seller's mision"
               cssProperties='flex flex-col relative min-h-[340px] '
            >
               <Parraf cssProperties='text-left w-2/3 self-end p-4 mt-8 bg-slate-50 rounded-t-3xl'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                  quidem voluptas? Laudantium, incidunt debitis! Doloremque tenetur
                  provident nostrum aliquam, fuga ea dolores molestias beatae eius a
                  odio iusto cumque!
               </Parraf>
               <Parraf cssProperties='text-left w-2/3 self-end p-4 rounded-b-3xl bg-slate-50'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                  quidem voluptas? Laudantium, incidunt debitis! Doloremque tenetur
                  provident nostrum aliquam, fuga ea dolores molestias beatae eius a
                  odio iusto cumque! Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Rerum, quidem voluptas? Laudantium, incidunt
                  debitis! Doloremque tenetur provident nostrum aliquam, fuga ea
                  dolores molestias beatae eius a odio iusto cumque!
               </Parraf>
               <ImgComponent
                  imgPath='/100quality.webp'
                  alt='100%-quality-brand'
                  classContainer='absolute'
               />
            </H2SingleComponent>
            <H2SingleComponent
               h2Text='Our customer reviews'
               cssProperties='flex flex-col relative p-6   '
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

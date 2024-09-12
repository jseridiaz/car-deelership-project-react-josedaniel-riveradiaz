import brands from "../../../data/brands"
import H2Component from "../../atoms/H2Component"

const Brands = () => {
   return (
      <section className='w-full bg-blue-200 p-10'>
         <H2Component title='Brands' colorTitle='text-black' />
         <div className='flex gap-5 justify-around mt-14  p-2 rounded-2xl'>
            {brands.map((el, idx) => (
               <div
                  key={idx}
                  className='transition duration-500 hover:drop-shadow-lg  cursor-pointer filter grayscale hover:grayscale-0 hover:scale-110 '
               >
                  {el.img}
               </div>
            ))}
         </div>
      </section>
   )
}

export default Brands

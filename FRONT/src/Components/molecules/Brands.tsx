import brands from "../../data/brands"

const Brands = () => {
   return (
      <section className='w-full bg-blue-200 p-10'>
         <div className='flex justify-center gap-3 items-center  '>
            <div className='flex bg-gray-400 w-1/4 h-0.5	'></div>
            <h2 className='font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 '>
               Brands
            </h2>
            <div className='flex bg-gray-400 w-1/4 h-0.5	'></div>
         </div>
         <div className='flex gap-5 justify-around mt-14 '>
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

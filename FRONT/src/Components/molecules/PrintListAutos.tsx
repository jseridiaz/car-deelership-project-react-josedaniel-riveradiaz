import { PrintListAutoType } from "../../utils/types"

import ImgAutos from "../atoms/ImgAutos"

const PrintListAutos: React.FC<PrintListAutoType> = ({
   arrayToPRint,
   cssProperties,
}) => {
   return (
      <section className={cssProperties}>
         <ul className='flex flex-wrap justify-evenly gap-y-14 gap-x-7'>
            {arrayToPRint &&
               arrayToPRint.map((el, idx) => (
                  <ImgAutos
                     key={idx}
                     idx={idx}
                     path={el.picture[0]}
                     alt={`${el.brand}_${el.model}_${el.manufactureYear}_${el.color}`}
                     brand={el.brand}
                     state={el.state}
                     model={el.model}
                     km={el.kilometer}
                     availavility={el.availability}
                     year={el.manufactureYear}
                     price={el.price}
                     color={el.color}
                  />
               ))}
         </ul>
      </section>
   )
}

export default PrintListAutos

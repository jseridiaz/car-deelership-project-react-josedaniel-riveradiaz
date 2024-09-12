import SvgBus from "../Components/atoms/icons/SvgBus/SvgBus"
import SvgCar from "../Components/atoms/icons/SvgCar/SvgCar"
import SvgWallet from "../Components/atoms/icons/SvgWallet/SvgWallet"
interface HomeServicesTypes {
   title: string
   description: string
   img: JSX.Element
}
export const homeServices: HomeServicesTypes[] = [
   {
      title: "Top Buy & sell Car",
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ex consequuntur ea laborum maxime...",
      img: <SvgCar />,
   },
   {
      title: "Easy payment",
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ex consequuntur ea laborum maxime... ",
      img: <SvgWallet />,
   },
   {
      title: "Top Buy & sell Car",
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ex consequuntur ea laborum maxime...",
      img: <SvgBus />,
   },
]

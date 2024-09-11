import AudiBrandIcon from "../Components/atoms/icons/Audi/Audi"
import HondaIcon from "../Components/atoms/icons/Honda/HondaIcon"
import MercedesIcon from "../Components/atoms/icons/Mercedes/MercedesIcon"
import VolvoIcon from "../Components/atoms/icons/Volvo/VolvoIcon"
import VolkswagenIcon from "../Components/atoms/icons/Volkswagen/VolkswagenIcon"

interface Brandtypes {
   name: string
   img: JSX.Element
}

interface Brandtypes {
   name: string
   img: JSX.Element
}

const brands: Brandtypes[] = [
   { name: "Audi", img: <AudiBrandIcon /> },
   { name: "Honda", img: <HondaIcon /> },
   { name: "Mercedes", img: <MercedesIcon /> }, // Componente de Mercedes
   { name: "Volvo", img: <VolvoIcon /> }, // Componente de Volvo
   { name: "Volkswagen", img: <VolkswagenIcon /> }, // Componente de Nissan
]

export default brands

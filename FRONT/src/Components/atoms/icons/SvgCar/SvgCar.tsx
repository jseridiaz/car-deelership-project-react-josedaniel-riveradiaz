import { SVGProps } from "react"
const SvgCar = (props: SVGProps<SVGSVGElement>) => (
   <svg
      xmlns='http://www.w3.org/2000/svg'
      width={40}
      height={40}
      fill='none'
      {...props}
   >
      <path
         stroke='#A2001D'
         strokeLinecap='round'
         strokeLinejoin='round'
         strokeWidth={2}
         d='M25.85 4.717h-11.7c-4.15 0-5.067 2.066-5.6 4.6l-1.883 9.016h26.666L31.45 9.317c-.533-2.534-1.45-4.6-5.6-4.6ZM36.65 33.033c.183 1.95-1.383 3.634-3.383 3.634h-3.134c-1.8 0-2.05-.767-2.366-1.717l-.334-1c-.466-1.367-.766-2.283-3.166-2.283h-8.534c-2.4 0-2.75 1.033-3.166 2.283l-.334 1c-.316.95-.566 1.717-2.366 1.717H6.733c-2 0-3.566-1.684-3.383-3.634l.933-10.15c.234-2.5.717-4.55 5.084-4.55h21.266c4.367 0 4.85 2.05 5.084 4.55l.933 10.15ZM6.667 13.333H5M35 13.333h-1.667M20 5v3.333M17.5 8.333h5M10 25h5M25 25h5'
      />
   </svg>
)
export default SvgCar

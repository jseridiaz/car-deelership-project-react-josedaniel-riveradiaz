import { SVGProps } from "react"
const EmptyHeart = (props: SVGProps<SVGSVGElement>) => (
   <svg
      xmlns='http://www.w3.org/2000/svg'
      width={25}
      height={25}
      fill='#fff'
      viewBox='0 0 24 24'
      {...props}
   >
      <path
         stroke='#000'
         strokeLinecap='round'
         strokeLinejoin='round'
         strokeWidth={1.13}
         d='M15.7 4C18.87 4 21 6.98 21 9.76 21 15.39 12.16 20 12 20c-.16 0-9-4.61-9-10.24C3 6.98 5.13 4 8.3 4c1.82 0 3.01.91 3.7 1.71A4.77 4.77 0 0 1 15.7 4Z'
      />
   </svg>
)
export default EmptyHeart

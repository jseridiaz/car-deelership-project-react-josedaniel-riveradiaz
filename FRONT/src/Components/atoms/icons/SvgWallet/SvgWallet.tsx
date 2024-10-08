import { SVGProps } from "react"
const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
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
         d='M36.667 20v8.333c0 5-3.334 8.334-8.334 8.334H11.667c-5 0-8.334-3.334-8.334-8.334V20c0-4.533 2.734-7.7 6.984-8.233.433-.067.883-.1 1.35-.1h16.666c.434 0 .85.016 1.25.083 4.3.5 7.084 3.683 7.084 8.25Z'
      />
      <path
         stroke='#A2001D'
         strokeLinecap='round'
         strokeLinejoin='round'
         strokeWidth={2}
         d='M29.586 11.75a7.63 7.63 0 0 0-1.25-.083H11.669c-.467 0-.917.033-1.35.1.233-.467.567-.9.967-1.3l5.416-5.434a5.875 5.875 0 0 1 8.267 0l2.917 2.95a5.624 5.624 0 0 1 1.7 3.767ZM36.667 20.833h-5a3.343 3.343 0 0 0-3.334 3.334c0 1.833 1.5 3.333 3.334 3.333h5'
      />
   </svg>
)
export default SvgWallet

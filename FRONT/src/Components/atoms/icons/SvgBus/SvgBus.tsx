import { SVGProps } from "react"
const SvgBus = (props: SVGProps<SVGSVGElement>) => (
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
         d='M28.167 36.667H11.833C9 36.667 6.667 34.35 6.667 31.5v-23c0-2.833 2.316-5.167 5.166-5.167h16.334c2.833 0 5.166 2.317 5.166 5.167v23a5.171 5.171 0 0 1-5.166 5.167Z'
      />
      <path
         stroke='#A2001D'
         strokeLinecap='round'
         strokeLinejoin='round'
         strokeWidth={2}
         d='M30.833 21.667H9.167a2.497 2.497 0 0 1-2.5-2.5v-3.334c0-1.383 1.116-2.5 2.5-2.5h21.666c1.384 0 2.5 1.117 2.5 2.5v3.334c0 1.383-1.116 2.5-2.5 2.5ZM14.157 29.5h.015M25.824 29.5h.015M15.833 8.333h8.334'
      />
   </svg>
)
export default SvgBus

import { SVGProps } from "react"
const ChatSvg = (props: SVGProps<SVGSVGElement>) => (
   <svg
      xmlns='http://www.w3.org/2000/svg'
      width={50}
      height={50}
      fill='none'
      viewBox='-2.4 -2.4 28.8 28.8'
      {...props}
   >
      <g
         stroke='#4a4a4a'
         strokeLinecap='round'
         strokeLinejoin='round'
         strokeWidth={2}
      >
         <path d='M8 18.72C6.339 20.134 4.82 21 2 21c1-1 2.27-2.35 2.801-4.447C3.067 15.114 2 13.157 2 11c0-4.418 4.477-8 10-8 5.1 0 9.308 3.054 9.923 7' />
         <path d='M16 19.889c-3.314 0-6-1.99-6-4.445C10 12.99 12.686 11 16 11s6 1.99 6 4.444c0 1.199-.64 2.286-1.68 3.085.317 1.165 1.08 1.915 1.68 2.471-1.8 0-2.716-.544-3.792-1.422-.684.2-1.428.31-2.208.31Z' />
      </g>
   </svg>
)
export default ChatSvg

import { SVGProps } from "react"
const MenuMobileSvg = (props: SVGProps<SVGSVGElement>) => (
   <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlSpace='preserve'
      width={50}
      height={50}
      style={{
         fillRule: "evenodd",
         clipRule: "evenodd",
         strokeLinejoin: "round",
         strokeMiterlimit: 2,
      }}
      viewBox='-6.4 -6.4 76.8 76.8'
      {...props}
   >
      <path
         d='M0 0h1280v800H0z'
         style={{
            fill: "none",
         }}
         transform='translate(-1024 -192)'
      />
      <path
         d='M103.288 8.535h212.447v34.133H103.288z'
         style={{
            fillRule: "nonzero",
         }}
         transform='matrix(.2251 0 0 .17555 -15.248 42.353)'
      />
      <path
         d='M103.288 8.535h212.447v34.133H103.288z'
         style={{
            fillRule: "nonzero",
         }}
         transform='matrix(.2251 0 0 .17555 -15.038 27.431)'
      />
      <path
         d='M103.288 8.535h212.447v34.133H103.288z'
         style={{
            fillRule: "nonzero",
         }}
         transform='matrix(.2251 0 0 .17555 -15.038 12.51)'
      />
   </svg>
)
export default MenuMobileSvg

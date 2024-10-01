type ImgType = {
   imgPath: string
   alt: string
   classContainer?: string
   classImg?: string
   link?: boolean
}
const ImgComponent: React.FC<ImgType> = ({
   imgPath,
   alt,
   classContainer,
   classImg,
}) => {
   return (
      <div className={`${classContainer} overflow-hidden`}>
         <img
            className={`${classImg}`}
            src={imgPath}
            alt={alt}
            draggable={false}
            loading='lazy'
         />
      </div>
   )
}

export default ImgComponent

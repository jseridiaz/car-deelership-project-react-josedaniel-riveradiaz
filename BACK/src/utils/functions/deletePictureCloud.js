const cloudinary = require("cloudinary").v2

const deletePictureCloud = imgUrl => {
   const splittedUrl = imgUrl.split("/")
   const aPart = splittedUrl.at(-2)
   const bPart = splittedUrl.at(-1).split(".")[0]
   const Link = `${aPart}/${bPart}`

   cloudinary.uploader.destroy(Link).then(() => {
      console.log("file deleted")
   })
}
module.exports = { deletePictureCloud }

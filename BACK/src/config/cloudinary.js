const cloudinary = require("cloudinary").v2

const cloudinaryConnect = async () => {
   try {
      cloudinary.config({
         cloud_name: process.env.CLOUD_NAME,
         api_key: process.env.API_KEY,
         api_secret: process.env.API_SECRET,
      })
      console.log("Connected to Cloudinary")
   } catch (error) {
      console.log(error)
   }
}

module.exports = { cloudinaryConnect }

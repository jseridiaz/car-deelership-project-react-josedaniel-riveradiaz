const cloudinary = require("cloudinary").v2
const multer = require("multer")
const { CloudinaryStorage } = require("multer-storage-cloudinary")

const storage = folderName =>
   new CloudinaryStorage({
      cloudinary,
      params: {
         folder: folderName,
      },
   })

const uploadStorage = folderName => multer({ storage: storage(folderName) })

module.exports = { uploadStorage }

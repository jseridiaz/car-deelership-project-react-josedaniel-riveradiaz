require("dotenv").config()
const mongoose = require("mongoose")
const AutoModel = require("../../API/models/auto")
const { convertCsvToJs } = require("../functions/convertCsvToJs")
const { bbddConection } = require("../../config/db")

const arrayAutosSeed = []
convertCsvToJs(arrayAutosSeed)

bbddConection()
   .then(async () => {
      try {
         const allAutos = await AutoModel.find()
         if (allAutos.length > 0) {
            await AutoModel.collection.drop()
            console.log("Database deleted")
         }
      } catch (error) {
         throw new Error(error)
      }
   })
   .then(async () => {
      try {
         await AutoModel.insertMany(arrayAutosSeed)
         console.log("Seed is already inserted")
      } catch (error) {
         throw new Error(error)
      }
   })
   .finally(() => {
      try {
         mongoose.disconnect()
         console.log("bbdd disconnected")
      } catch (error) {
         throw new Error(error)
      }
   })

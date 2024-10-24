require("dotenv").config()
const express = require("express")

const { bbddConection } = require("./src/config/db")
const cors = require("cors")
// const fs = require("fs")
const AutoModel = require("./src/API/models/auto")

const routerMain = require("./src/API/routes/main/mainRoute")
const { convertCsvToJs } = require("./src/utils/functions/convertCsvToJs")
const { cloudinaryConnect } = require("./src/config/cloudinary")
const app = express()
app.use(cors())
bbddConection()
cloudinaryConnect()

app.use(express.json())

const jsonAuto = []

convertCsvToJs(jsonAuto)
// fs.writeFile("Autos.json", JSON.stringify(jsonAuto), async error => {
//    if (error) {
//       console.log(error)
//    } else {
//       const allAutos = await AutoModel.find()
//       const allAutosVin = allAutos.map(el => el.vin)

//       for (let i = 0; i < jsonAuto.length; i++) {
//          const e = jsonAuto[i].vin
//          if (allAutosVin.includes(e)) {
//             continue
//          } else {
//             await AutoModel.insertMany(jsonAuto[i])
//             console.log("writted")
//          }
//       }
//    }
// })

app.use("/", routerMain)
app.use("*", (req, res, next) => {
   res.status(404).json("Route not found")
})

app.listen(process.env.PORT, () => {
   console.log("Route working in port http://localhost:" + process.env.PORT)
})

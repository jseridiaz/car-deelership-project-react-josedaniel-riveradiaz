require("dotenv").config()
const express = require("express")

const { bbddConection } = require("./src/config/db")
const cors = require("cors")
const fs = require("fs")
const routerAuto = require("./src/API/routes/auto")
const AutoModel = require("./src/API/models/auto")
const { rgbToHex } = require("./src/utils/functions/rgbTohex")
const { getColor } = require("./src/utils/functions/getColor")
const routerUser = require("./src/API/routes/user")
const routerMain = require("./src/API/routes/main/mainRoute")
const { convertCsvToJs } = require("./src/utils/functions/convertCsvToJs")
bbddConection()
const app = express()
app.use(express.json())

const jsonAuto = []

convertCsvToJs(jsonAuto)

app.use(cors())

app.use("/", routerMain)

app.use("*", (req, res) => {
   res.status(404).json("Route not found")
})

app.listen(process.env.PORT, () => {
   console.log("Route working in port http://localhost:" + process.env.PORT)
})

fs.writeFile("Autos.json", JSON.stringify(jsonAuto), async error => {
   if (error) {
      console.log(error)
   } else {
      const allAutos = await AutoModel.find()
      const allAutosVin = allAutos.map(el => el.vin)

      for (let i = 0; i < jsonAuto.length; i++) {
         const e = jsonAuto[i].vin
         if (allAutosVin.includes(e)) {
            continue
         } else {
            await AutoModel.insertOne(jsonAuto[i])
            console.log("writted")
         }
      }
   }
})

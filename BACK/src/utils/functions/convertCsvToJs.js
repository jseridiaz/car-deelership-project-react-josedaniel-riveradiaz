const fs = require("fs")
const path = require("path")
const { getColor } = require("./getColor")
const { rgbToHex } = require("./rgbTohex")
const namer = require("color-namer")

const convertCsvToJs = endArray => {
   const pathCsv = path.join(__dirname, "..", "..", "data", "BBDD_cars.csv")
   const data = fs.readFileSync(pathCsv, { encoding: "utf-8" })
   const dataSplitted = data.split("\r\n")
   let dataFiltered = []
   dataSplitted.forEach(el => {
      dataFiltered.push(el.split(","))
   })
   const props = [
      "vin",
      "brand",
      "model",
      "type",
      "manufactureYear",
      "kilometer",
      "state",
      "price",
      "acquisitionDate",
      "availability",
      "picture",
      "color",
   ]
   for (let i = 1; i < dataSplitted.length - 1; i++) {
      const e = dataSplitted[i].split(",")
      let obj = {}

      for (let j = 0; j < e.length; j++) {
         let el = e[j]

         if (j === 4) {
            el = parseInt(el)
         } else if (j === 5) {
            el = el.replace(" km", "")
            el = parseInt(el.split(".").join(""))
         } else if (j === 7) {
            el = parseInt(el.slice(1).split(".").join(""))
         } else if (j === 11) {
            const { r, g, b } = getColor(el)
            el = rgbToHex(r, g, b)
            el = namer(el, { pick: "basic" }).basic[0].name
         }

         obj[props[j]] = el
      }
      endArray.push(obj)
   }
}
module.exports = { convertCsvToJs }

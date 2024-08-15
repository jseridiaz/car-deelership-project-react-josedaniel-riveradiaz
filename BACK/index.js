require('dotenv').config()
const express = require('express')
const fs = require('fs')
const { bbddConection } = require('./src/config/db')
const cors = require('cors')
const routerAuto = require('./src/API/routes/auto')
const AutoModel = require('./src/API/models/auto')
const { rgbToHex } = require('./src/utils/functions/rgbTohex')
const namer = require('color-namer')
const { getColor } = require('./src/utils/functions/getColor')
bbddConection()
const app = express()
app.use(express.json())
const data = fs.readFileSync('./src/data/BBDD_cars.csv', { encoding: 'utf-8' })
const dataSplitted = data.split('\r\n')
let dataFiltered = []

dataSplitted.forEach((el) => {
  dataFiltered.push(el.split(','))
})
const props = [
  'vin',
  'brand',
  'model',
  'type',
  'manufactureYear',
  'kilometer',
  'state',
  'price',
  'acquisitionDate',
  'availability',
  'picture',
  'color'
]

const jsonAuto = []
for (let i = 1; i < dataSplitted.length - 1; i++) {
  const e = dataSplitted[i].split(',')
  let obj = {}

  for (let j = 0; j < e.length; j++) {
    let el = e[j]

    if (j === 4) {
      el = parseInt(el)
    } else if (j === 5) {
      el = el.replace(' km', '')
      el = parseInt(el.split('.').join(''))
    } else if (j === 7) {
      el = parseInt(el.slice(1).split('.').join(''))
    } else if (j === 11) {
      const { r, g, b } = getColor(el)
      el = rgbToHex(r, g, b)
      el = namer(el, { pick: 'basic' }).basic[0].name
    }

    obj[props[j]] = el
  }
  jsonAuto.push(obj)
}

app.use(cors())

app.use('/', routerAuto)

app.use('*', (req, res) => {
  res.status(404).json('Route not found')
})

app.listen(process.env.PORT, () => {
  console.log('Route working in port http://localhost:' + process.env.PORT)
})

fs.writeFile('Autos.json', JSON.stringify(jsonAuto), async (error) => {
  if (error) {
    console.log(error)
  } else {
    await AutoModel.collection.drop().then(async () => {
      await AutoModel.insertMany(jsonAuto)
    })

    console.log('File is already writted')
  }
})

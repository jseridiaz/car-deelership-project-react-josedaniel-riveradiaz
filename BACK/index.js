require('dotenv').config()
const express = require('express')
const { bbddConection } = require('./src/config/db')
const cors = require('cors')

bbddConection()
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json('Route is working')
})
app.use('*', (req, res) => {
  res.status(404).json('Route not found')
})

app.listen(process.env.PORT, () => {
  console.log('Route working in port http://localhost:' + process.env.PORT)
})

const express = require('express')
const {
  getAuto,
  postAuto,
  deleteAuto,
  updateAuto
} = require('../controllers/auto')

const routerAuto = express.Router()

routerAuto.get('/', getAuto)
routerAuto.post('/', postAuto)
routerAuto.put('/:id', updateAuto)
routerAuto.delete('/:id', deleteAuto)

module.exports = routerAuto

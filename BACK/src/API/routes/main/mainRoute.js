const express = require("express")
const routerAuto = require("../auto")
const routerUser = require("../user")
const routerMain = express.Router()

routerMain.use("/autos/v1/search", routerAuto)
routerMain.use("/autos/v1/user", routerUser)

module.exports = routerMain

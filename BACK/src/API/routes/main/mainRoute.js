const express = require("express")
const routerAuto = require("../auto")
const routerUser = require("../user")
const routerCustomer = require("../customer")
const routerMain = express.Router()

routerMain.use("/autos/v1/search", routerAuto)
routerMain.use("/autos/v1/user", routerUser)
routerMain.use("/autos/v1/customer", routerCustomer)

module.exports = routerMain

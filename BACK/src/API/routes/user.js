const express = require("express")
const { getAllUser, register, deleteUser, login } = require("../controllers/user")

const routerUser = express.Router()

routerUser.get("/", getAllUser)
routerUser.post("/register", register)
routerUser.post("/login", login)
routerUser.delete("/delete/:id", deleteUser)

module.exports = routerUser

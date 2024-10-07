const express = require("express")
const {
   getAllUser,
   register,
   deleteUser,
   login,
   getUserById,
} = require("../controllers/user")

const routerUser = express.Router()

routerUser.get("/", getAllUser)
routerUser.get("/:id", getUserById)
routerUser.post("/register", register)
routerUser.post("/login", login)
routerUser.delete("/delete/:id", deleteUser)

module.exports = routerUser

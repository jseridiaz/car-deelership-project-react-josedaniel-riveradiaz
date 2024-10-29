const express = require("express")
const {
   getAllUser,
   register,
   deleteUser,
   login,
   getUserById,
   putUser,
} = require("../controllers/user")
const { isAdmin } = require("../../middlewares/isAdmin")

const routerUser = express.Router()

routerUser.get("/", [isAdmin], getAllUser)
routerUser.get("/:id", [isAdmin], getUserById)
routerUser.post("/register", register)
routerUser.post("/login", login)
routerUser.put("/:id", putUser)
routerUser.delete("/delete/:id", deleteUser)

module.exports = routerUser

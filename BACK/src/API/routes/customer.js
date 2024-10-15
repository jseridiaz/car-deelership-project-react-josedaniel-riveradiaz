const express = require("express")
const {
   getAllCustomer,
   postCustomer,
   putCustomer,
   deleteCustomer,
   getCustomerById,
   getCustomerByUserId,
   putCustomerDeleteFavourites,
   putCustomerByIdUser,
   clearFavourites,
} = require("../controllers/customer")
const routerCustomer = express.Router()
routerCustomer.get("/", getAllCustomer)
routerCustomer.get("/:id", getCustomerById)
routerCustomer.get("/user/:id", getCustomerByUserId)
routerCustomer.post("/", postCustomer)
routerCustomer.put("/:id", putCustomer)
routerCustomer.put("/idUser/:id", putCustomerByIdUser)
routerCustomer.put("/delete/favourites/:id", putCustomerDeleteFavourites)
routerCustomer.put("/clear/favourites/:id", clearFavourites)
routerCustomer.delete("/:id", deleteCustomer)

module.exports = routerCustomer

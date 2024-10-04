const express = require("express")
const {
   getAllCustomer,
   postCustomer,
   putCustomer,
   deleteCustomer,
   getCustomerById,
   getCustomerByUserId,
   putCustomerDeleteFavourites,
} = require("../controllers/customer")
const routerCustomer = express.Router()
routerCustomer.get("/", getAllCustomer)
routerCustomer.get("/:id", getCustomerById)
routerCustomer.get("/user/:id", getCustomerByUserId)
routerCustomer.post("/", postCustomer)
routerCustomer.put("/:id", putCustomer)
routerCustomer.put("/delete/favourites/:id", putCustomerDeleteFavourites)
routerCustomer.delete("/:id", deleteCustomer)

module.exports = routerCustomer

const express = require("express")
const {
   getAuto,
   getAutoByCategory,
   postAuto,
   deleteAuto,
   updateAuto,
   getAutoByID,
   getAutoByBrand,
   getAutoByBrandAndCategory,
} = require("../controllers/auto")

const routerAuto = express.Router()

routerAuto.get("/", getAuto)
routerAuto.get("/category/:category", getAutoByCategory)
routerAuto.get("/brand/:brand", getAutoByBrand)
routerAuto.get("/query/brand/category", getAutoByBrandAndCategory)
routerAuto.get("/:id", getAutoByID)
routerAuto.post("/", postAuto)
routerAuto.put("/:id", updateAuto)
routerAuto.delete("/:id", deleteAuto)

module.exports = routerAuto

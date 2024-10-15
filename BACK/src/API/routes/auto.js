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
   getAutoByBrandAndCategoryAndModel,
   getAutoByBrandAndModel,
   getAutoChassisAndCategory,
   getAutoByModel,
} = require("../controllers/auto")
const { isAdmin } = require("../../middlewares/isAdmin")
const { uploadStorage } = require("../../middlewares/File")

const routerAuto = express.Router()

routerAuto.get("/", getAuto)
// routerAuto.get("/availables", getAutosAvailables)
routerAuto.get("/category/:category", getAutoByCategory)
// routerAuto.get("/category/:category/availables", getAutoByCategoryAvailabilty)
routerAuto.get("/brand/:brand", getAutoByBrand)
// routerAuto.get("/brand/:brand/availables", getAutoByBrandAvailables)
routerAuto.get("/model/:model", getAutoByModel)
// routerAuto.get("/model/:model/availables", getAutoByModelAvailables)
routerAuto.get("/query/brand/model", getAutoByBrandAndModel)
// routerAuto.get("/query/brand/model/availables", getAutoByBrandAndModelAvailables)
routerAuto.get("/query/brand/category", getAutoByBrandAndCategory)
routerAuto.get("/query/category/model", getAutoChassisAndCategory)
// routerAuto.get(
//    "/query/category/model/availables",
//    getAutoChassisAndCategoryAvailables,
// )

routerAuto.get("/query/brand/category/model", getAutoByBrandAndCategoryAndModel)
// routerAuto.get(
//    "/query/brand/category/model/availables",
//    getAutoByBrandAndCategoryAndModelAvailables,
// )
routerAuto.get("/:id", getAutoByID)
routerAuto.post(
   "/",
   [isAdmin],
   uploadStorage("AutosUploaded").single("picture"),
   postAuto,
)
routerAuto.put("/:id", updateAuto)
routerAuto.delete("/:id", deleteAuto)

module.exports = routerAuto

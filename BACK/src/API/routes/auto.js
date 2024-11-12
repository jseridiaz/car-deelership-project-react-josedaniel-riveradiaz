const express = require("express")
const {
   postAuto,
   deleteAuto,
   updateAuto,
   getAutoByID,
   getAutoFiltered,
} = require("../controllers/auto")
const { isAdmin } = require("../../middlewares/isAdmin")
const { uploadStorage } = require("../../middlewares/file")

const routerAuto = express.Router()

routerAuto.get("/query", getAutoFiltered)
routerAuto.get("/:id", getAutoByID)
routerAuto.post(
   "/",
   [isAdmin],
   uploadStorage("AutosUploaded").single("picture"),
   postAuto,
)
routerAuto.put("/:id", [isAdmin], updateAuto)
routerAuto.delete("/:id", [isAdmin], deleteAuto)

module.exports = routerAuto

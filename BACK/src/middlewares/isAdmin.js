const User = require("../API/models/user")
const { verifytoken } = require("../config/token/tokenUser")
const { res400 } = require("../utils/functions/responsesCrud")

const isAdmin = async (req, res, next) => {
   try {
      const token = req.headers.authorization?.replace("Bearer ", "")
      if (!token) {
         res.status(400).json("You are not authorized")
      }
      const { id } = verifytoken(token)
      const user = await User.findById(id)
      if (user.rol !== "admin") {
         res.status(401).json("You are not properly authorized")
      }
      req.user = user
      req.user.password = null
      next()
   } catch (error) {
      res400(req, res, next, error)
   }
}

module.exports = { isAdmin }

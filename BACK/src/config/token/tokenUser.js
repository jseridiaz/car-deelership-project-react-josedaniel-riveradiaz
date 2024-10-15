const jwt = require("jsonwebtoken")
const tokenGenerator = id =>
   jwt.sign({ id }, process.env.TOKEN_KEY, { expiresIn: "4d" })

const verifytoken = token => jwt.verify(token, process.env.TOKEN_KEY)
module.exports = { tokenGenerator, verifytoken }

const { res400 } = require("./responsesCrud")

const validatorEmail = (req, res, next, email) => {
   const regex = /^[a-z]/
   if (!email.includes(".") || !email.includes("@")) {
      return res400(req, res, next, "The email pass  a invalid email")
   } else {
      if (email.lastIndexOf(".") < email.indexOf("@")) {
         return res400(req, res, next, "The email pass  a invalid email")
      } else {
         if (!regex.test(email[email.length - 1])) {
            return res400(req, res, next, "The email pass  a invalid email")
         }
      }
   }
}

const validatorPassword = (req, res, next, password) => {
   const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&<>.])[A-Za-z\d@$!%*?&<>.]{7,}$/

   if (!regex.test(password)) {
      res400(
         req,
         res,
         next,
         " The password must contain a Lowecase, Uppercase, number and a special character like @$!%*?&<>.",
      )
   }
}
module.exports = { validatorEmail, validatorPassword }

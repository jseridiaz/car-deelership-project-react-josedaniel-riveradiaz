const User = require("../models/user")
const { res200, res400 } = require("../../utils/functions/responsesCrud")
const {
   validatorEmail,
   validatorPassword,
} = require("../../utils/functions/validator")
const bcrypt = require("bcrypt")
const { tokenGenerator } = require("../../config/token/tokenUser")
const CustomerModel = require("../models/customer")
const { deleteCustomer } = require("./customer")

const getAllUser = async (req, res, next) => {
   try {
      const allUsers = await User.find()
      return res200(req, res, next, allUsers, "All users")
   } catch (error) {
      return res400(req, res, next, error)
   }
}
const getUserById = async (req, res, next) => {
   try {
      const { id } = req.params
      const userById = await User.findById(id)

      return res200(req, res, next, userById, "All users")
   } catch (error) {
      return res400(req, res, next, error)
   }
}

const register = async (req, res, next) => {
   try {
      const { email, password } = req.body
      const userByEmail = await User.findOne({ email })
      if (userByEmail) {
         return res400(req, res, next, "This user is already registered")
      }

      validatorEmail(req, res, next, email)
      validatorPassword(req, res, next, password)

      const newUser = new User(req.body)
      console.log(req.body)

      const newUserSaved = await newUser.save()
      console.log(newUserSaved)

      const newCustomer = new CustomerModel({ profile: newUserSaved._id })
      const newCustomerSaved = await newCustomer.save()
      return res200(req, res, next, newUserSaved, "Account created successfully")
   } catch (error) {
      res400(req, res, next, error)
   }
}

const login = async (req, res, next) => {
   const { email, password } = req.body
   const userFinded = await User.findOne({ email })
   if (!userFinded) {
      return res400(req, res, next, "The user or password is incorrect")
   }
   if (!bcrypt.compareSync(password, userFinded.password)) {
      return res400(req, res, next, "The user or password is incorrect")
   } else {
      const token = tokenGenerator(userFinded._id)
      return res200(req, res, next, { logged: userFinded, token }, "You're in!")
   }
}
const putUser = async (req, res, next) => {
   try {
      const { id } = req.params
      const newUser = User(req.body)

      newUser._id = id
      const updateUser = await User.findByIdAndUpdate(id, newUser, { new: true })

      res200(req, res, next, updateUser)
   } catch (error) {
      res400(req, res, next, error)
   }
}

const deleteUser = async (req, res, next) => {
   try {
      const { id } = req.params
      const deleteUser = await User.findByIdAndDelete(id)
      const deleteCustomer = await CustomerModel.findOneAndDelete({
         profile: { _id: id },
      })

      res200(req, res, next, deleteUser)
   } catch (error) {
      res400(req, res, next, error)
   }
}

module.exports = { getAllUser, getUserById, putUser, register, login, deleteUser }

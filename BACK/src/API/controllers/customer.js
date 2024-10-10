const logicPutCustomer = require("../../utils/functions/logicPutCustomer")
const { res200, res400 } = require("../../utils/functions/responsesCrud")
const CustomerModel = require("../models/customer")
const getAllCustomer = async (req, res, next) => {
   try {
      const allCustomer = await CustomerModel.find()
         .populate("profile")
         .populate("reserves")
         .populate("buys")
         .populate("favourites")

      return res200(req, res, next, allCustomer, "Fetch Succesful")
   } catch (error) {
      return res400(req, res, next, error)
   }
}
const getCustomerByUserId = async (req, res, next) => {
   try {
      const { id } = req.params
      const userFinded = await CustomerModel.findOne({ profile: { _id: id } })
         .populate("profile")
         .populate("reserves")
         .populate("buys")
         .populate("favourites")

      return res200(req, res, next, userFinded, "Fetch succesfull")
   } catch (error) {
      return res400(req, res, next, error)
   }
}

const postCustomer = async (req, res, next) => {
   try {
      const customerPosted = CustomerModel(req.body)
      const postCustomer = await customerPosted.save()
      return res200(req, res, next, postCustomer, "New customer posted:")
   } catch (error) {
      return res400(req, res, next, error)
   }
}
const putCustomerDeleteFavourites = async (req, res, next) => {
   try {
      const { id } = req.params
      const newCustomer = CustomerModel(req.body)
      const { favourites, ...rest } = req.body

      newCustomer._id = id

      const customerUpdated = await CustomerModel.findByIdAndUpdate(
         id,
         { ...rest, $pull: { favourites } },
         {
            new: true,
         },
      )

      return res200(req, res, next, customerUpdated, "Customer succesfully updated:")
   } catch (error) {
      return res400(req, res, next, error)
   }
}
const getCustomerById = async (req, res, next) => {
   try {
      const { id } = req.params
      const customerById = await CustomerModel.findById(id)
         .populate("profile")
         .populate("reserves")
         .populate("buys")
         .populate("favourites")
      return res200(req, res, next, customerById, "Fetch Succesful")
   } catch (error) {
      return res400(req, res, next, error)
   }
}
const putCustomer = async (req, res, next) => {
   try {
      const { id } = req.params
      const newCustomer = CustomerModel(req.body)
      const { reserves, buys, favourites, reviews, ...rest } = req.body

      newCustomer._id = id

      const customerUpdated = await CustomerModel.findByIdAndUpdate(
         id,
         { ...rest, $addToSet: { reserves, favourites, buys, reviews } },
         {
            new: true,
         },
      )
      // logicPutCustomer(reserves, favourites, buys, reviews)
      return res200(req, res, next, customerUpdated, "Customer succesfully updated:")
   } catch (error) {
      return res400(req, res, next, error)
   }
}
const putCustomerByIdUser = async (req, res, next) => {
   try {
      const { id } = req.params
      const newCustomer = CustomerModel(req.body)
      const { reserves, buys, favourites, reviews, ...rest } = req.body

      newCustomer._id = id

      const customerUpdated = await CustomerModel.findOneAndUpdate(
         { profile: id },
         { ...rest, $addToSet: { reserves, favourites, buys, reviews } },
         {
            new: true,
         },
      )
      // logicPutCustomer(reserves, favourites, buys, reviews)
      return res200(req, res, next, customerUpdated, "Customer succesfully updated:")
   } catch (error) {
      return res400(req, res, next, error)
   }
}
const deleteCustomer = async (req, res, next) => {
   try {
      const { id } = req.params
      const deleteCustomer = CustomerModel.findByIdAndDelete(id)

      return res200(req, res, next, deleteCustomer, "Customer deleted succesfully:")
   } catch (error) {
      return res400(req, res, next, error)
   }
}

module.exports = {
   getAllCustomer,
   getCustomerById,
   getCustomerByUserId,
   postCustomer,
   putCustomer,
   putCustomerByIdUser,
   putCustomerDeleteFavourites,
   deleteCustomer,
}

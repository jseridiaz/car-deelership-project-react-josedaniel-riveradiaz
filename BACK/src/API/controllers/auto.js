const { res200, res400 } = require("../../utils/functions/responsesCrud")
const AutoModel = require("../models/auto")

// CRUD OF AUTOMODEL API

const getAuto = async (req, res, next) => {
   try {
      const allModels = await AutoModel.find()
      return res200(req, res, next, allModels, "Fetch succesfull")
   } catch (error) {
      return res400(req, res, next, error)
   }
}

const getAutoByID = async (req, res, next) => {
   try {
      const { id } = req.params
      const autoById = await AutoModel.findById(id)
      return res200(req, res, next, autoById, "Fetch succesfull")
   } catch (error) {
      return res400(req, res, next, error)
   }
}
const getAutoByCategory = async (req, res, next) => {
   try {
      const { category } = req.params
      const autoByCategory = await AutoModel.find({ type: category })
      return res200(req, res, next, autoByCategory, "Fetch succesfull")
   } catch (error) {
      return res400(req, res, next, error)
   }
}
const getAutoByBrand = async (req, res, next) => {
   try {
      const { brand } = req.params
      const autoByBrand = await AutoModel.find({ brand })

      return res200(req, res, next, autoByBrand, "Fetch succesfull")
   } catch (error) {
      return res400(req, res, next, error)
   }
}

const postAuto = async (req, res, next) => {
   try {
      const autoPost = AutoModel(req.body)
      const savedAutoPost = await autoPost.save()

      return res200(req, res, next, savedAutoPost, "Fetch succesfull")
   } catch (error) {
      return res400(req, res, next, error)
   }
}

const updateAuto = async (req, res, next) => {
   try {
      const { id } = req.params
      console.log(id)
      const newModel = AutoModel(req.body)
      newModel._id = id

      const modelUpdated = await AutoModel.findByIdAndUpdate(id, newModel, {
         new: true,
      })

      return res200(req, res, next, modelUpdated, "Fetch succesfull")
   } catch (error) {
      return res400(req, res, next, error)
   }
}

const deleteAuto = async (req, res, next) => {
   try {
      const { id } = req.params
      console.log(id)

      const autoDelete = await AutoModel.findByIdAndDelete(id)

      return res200(req, res, next, autoDelete, "Fetch succesfull")
   } catch (error) {
      return res400(req, res, next, error)
   }
}

module.exports = {
   getAuto,
   getAutoByID,
   getAutoByCategory,
   getAutoByBrand,
   postAuto,
   updateAuto,
   deleteAuto,
}

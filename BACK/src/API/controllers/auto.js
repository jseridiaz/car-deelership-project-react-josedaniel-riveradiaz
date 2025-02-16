const { addFilters } = require("../../utils/functions/addFilters")
const { deletePictureCloud } = require("../../utils/functions/deletePictureCloud")
const { res200, res400, res201 } = require("../../utils/functions/responsesCrud")
const AutoModel = require("../models/auto")

// CRUD OF AUTOMODEL API

const getAutoFiltered = async (req, res, next) => {
   try {
      const {
         brand,
         model,
         chassis,
         availability,
         minPrice,
         maxPrice,
         minKm,
         maxKm,
         minYear,
         maxYear,
      } = req.query
      const filters = {}
      addFilters(
         filters,
         brand,
         model,
         chassis,
         availability,
         minPrice,
         maxPrice,
         minKm,
         maxKm,
         minYear,
         maxYear,
      )
      const autosFiltered = await AutoModel.find(filters)
      const arrayBrand = autosFiltered.map(el => el.brand)
      const noDuplicated = new Set(arrayBrand)
      const noD = [...noDuplicated]
      console.log(noD)

      res200(req, res, next, autosFiltered, "Fetch succesfull")
   } catch (error) {}
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

const postAuto = async (req, res, next) => {
   try {
      const autoPost = AutoModel(req.body)
      if (req.file) {
         autoPost.picture = req.file.path
         const splitted = req.file.path.split("/")
         const aPart = splitted.at(-2)
         const bPart = splitted.at(-1).split(".")[0]
      }

      const savedAutoPost = await autoPost.save()

      return res201(req, res, next, savedAutoPost)
   } catch (error) {
      return res400(req, res, next, error)
   }
}

const updateAuto = async (req, res, next) => {
   try {
      const { id } = req.params
      const newModel = AutoModel(req.body)
      newModel._id = id

      const modelUpdated = await AutoModel.findByIdAndUpdate(id, newModel, {
         new: true,
      })

      return res200(req, res, next, modelUpdated, "Car updated succesfully:")
   } catch (error) {
      return res400(req, res, next, error)
   }
}

const deleteAuto = async (req, res, next) => {
   try {
      const { id } = req.params

      const autoDelete = await AutoModel.findByIdAndDelete(id)
      deletePictureCloud(autoDelete.picture[0])

      return res200(req, res, next, autoDelete, "Fetch succesfull")
   } catch (error) {
      return res400(req, res, next, error)
   }
}

module.exports = {
   getAutoByID,
   getAutoFiltered,
   postAuto,
   updateAuto,
   deleteAuto,
}

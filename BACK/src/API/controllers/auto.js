const { addFilters } = require("../../utils/functions/addFilters")
const { deletePictureCloud } = require("../../utils/functions/deletePictureCloud")
const { res200, res400, res201 } = require("../../utils/functions/responsesCrud")
const AutoModel = require("../models/auto")

// CRUD OF AUTOMODEL API

const getAuto = async (req, res, next) => {
   try {
      const { availability, minPrice, maxPrice, minKm, maxKm, minYear, maxYear } =
         req.query
      console.log(availability, minPrice, maxPrice, minKm, maxKm, minYear, maxYear)
      const filters = {}
      addFilters(
         filters,
         availability,
         minPrice,
         maxPrice,
         minKm,
         maxKm,
         minYear,
         maxYear,
      )

      const allModels = await AutoModel.find(filters).sort({
         manufactureYear: -1,
      })
      return res200(req, res, next, allModels, "Fetch succesfull")
   } catch (error) {
      return res400(req, res, next, error)
   }
}
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
const getAutoByCategory = async (req, res, next) => {
   try {
      const { category } = req.params
      const { availability, minPrice, maxPrice, minKm, maxKm, minYear, maxYear } =
         req.query
      const filters = { type: category }
      addFilters(
         filters,
         availability,
         minPrice,
         maxPrice,
         minKm,
         maxKm,
         minYear,
         maxYear,
      )
      const autoByCategory = await AutoModel.find(filters).sort({
         manufactureYear: -1,
      })
      return res200(req, res, next, autoByCategory, "Fetch succesfull")
   } catch (error) {
      return res400(req, res, next, error)
   }
}

const getAutoByBrand = async (req, res, next) => {
   try {
      const { brand } = req.params
      const { availability, minPrice, maxPrice, minKm, maxKm, minYear, maxYear } =
         req.query
      const filter = { brand }
      addFilters(
         filter,
         availability,
         minPrice,
         maxPrice,
         minKm,
         maxKm,
         minYear,
         maxYear,
      )

      const autoByBrand = await AutoModel.find(filter).sort({
         manufactureYear: -1,
      })

      return res200(req, res, next, autoByBrand, "Fetch succesfull")
   } catch (error) {
      return res400(req, res, next, error)
   }
}

const getAutoByBrandAndCategory = async (req, res, next) => {
   try {
      const {
         brand,
         category,
         availability,
         minPrice,
         maxPrice,
         minKm,
         maxKm,
         minYear,
         maxYear,
      } = req.query
      console.log(
         brand,
         category,
         availability,
         minPrice,
         maxPrice,
         minKm,
         maxKm,
         minYear,
         maxYear,
      )

      const filter = { brand, type: category }
      addFilters(
         filter,
         availability,
         minPrice,
         maxPrice,
         minKm,
         maxKm,
         minYear,
         maxYear,
      )

      const autoByBrandAndCategory = await AutoModel.find(filter).sort({
         manufactureYear: -1,
      })

      return res200(req, res, next, autoByBrandAndCategory, "Fetch succesful")
   } catch (error) {
      return res400(req, res, next, error)
   }
}

const getAutoByBrandAndModel = async (req, res, next) => {
   try {
      const {
         brand,
         model,
         availability,
         minPrice,
         maxPrice,
         minKm,
         maxKm,
         minYear,
         maxYear,
      } = req.query
      const filter = { brand, model }
      addFilters(
         filter,
         availability,
         minPrice,
         maxPrice,
         minKm,
         maxKm,
         minYear,
         maxYear,
      )

      const autoByBrandAndModel = await AutoModel.find(filter).sort({
         manufactureYear: -1,
      })

      return res200(req, res, next, autoByBrandAndModel, "Fetch succesful")
   } catch (error) {
      return res400(req, res, next, error)
   }
}

const getAutoByModel = async (req, res, next) => {
   try {
      const { model } = req.params
      const { availability, minPrice, maxPrice, minKm, maxKm, minYear, maxYear } =
         req.query
      const filter = { model }
      addFilters(
         filter,
         availability,
         minPrice,
         maxPrice,
         minKm,
         maxKm,
         minYear,
         maxYear,
      )

      const autosByModel = await AutoModel.find(filter).sort({
         manufactureYear: -1,
      })
      res200(req, res, next, autosByModel, "Fetch succesful")
   } catch (error) {
      res400(req, res, next, error)
   }
}

const getAutoChassisAndCategory = async (req, res, next) => {
   try {
      const {
         category,
         model,
         availability,
         minPrice,
         maxPrice,
         minKm,
         maxKm,
         minYear,
         maxYear,
      } = req.query
      const filter = { type: category, model }
      addFilters(
         filter,
         availability,
         minPrice,
         maxPrice,
         minKm,
         maxKm,
         minYear,
         maxYear,
      )
      const autoBycategoryAndModel = await AutoModel.find(filter).sort({
         manufactureYear: -1,
      })

      res200(req, res, next, autoBycategoryAndModel, "Fetch succesfull")
   } catch (error) {
      res400(req, res, next, error)
   }
}

const getAutoByBrandAndCategoryAndModel = async (req, res, next) => {
   try {
      const {
         brand,
         category,
         model,
         availability,
         minPrice,
         maxPrice,
         minKm,
         maxKm,
         minYear,
         maxYear,
      } = req.query
      console.log(
         brand,
         category,
         availability,
         minPrice,
         maxPrice,
         minKm,
         maxKm,
         minYear,
         maxYear,
      )
      const filter = {
         brand,
         type: category,
         model,
      }
      addFilters(
         filter,
         availability,
         minPrice,
         maxPrice,
         minKm,
         maxKm,
         minYear,
         maxYear,
      )

      const autoByBrandAndCategory = await AutoModel.find(filter).sort({
         manufactureYear: -1,
      })

      return res200(req, res, next, autoByBrandAndCategory, "Fetch succesfull")
   } catch (error) {
      return res400(req, res, next, error)
   }
}

const postAuto = async (req, res, next) => {
   try {
      const autoPost = AutoModel(req.body)
      if (req.file) {
         console.log(req.file)

         autoPost.picture = req.file.path
         const splitted = req.file.path.split("/")
         const aPart = splitted.at(-2)
         const bPart = splitted.at(-1).split(".")[0]
         console.log(aPart, "/", bPart)
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
      console.log(id)
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
   getAuto,
   getAutoByID,
   getAutoByCategory,
   getAutoByBrand,
   getAutoFiltered,
   getAutoByModel,
   getAutoByBrandAndModel,
   getAutoByBrandAndCategory,
   getAutoChassisAndCategory,
   getAutoByBrandAndCategoryAndModel,
   postAuto,
   updateAuto,
   deleteAuto,
}

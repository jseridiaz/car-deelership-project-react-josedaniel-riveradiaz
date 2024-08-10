const AutoModel = require('../models/auto')
const { res200, res400 } = require('../../utils/functions/responsesCrud')
// CRUD OF AUTOMODEL API

const getAuto = async (req, res, next) => {
  try {
    const allModels = await AutoModel.find()
    return res200(req, res, next, allModels)
  } catch (error) {
    return res400(req, res, next, error)
  }
}

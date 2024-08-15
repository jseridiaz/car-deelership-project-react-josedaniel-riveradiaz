const mongoose = require('mongoose')

const autoSchema = new mongoose.Schema(
  {
    vin: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    type: { type: String, required: true },
    manufactureYear: { type: Number, required: true },
    kilometer: { type: Number, required: true },
    state: { type: String, required: true },
    price: { type: Number, required: true },
    acquisitionDate: { type: Date, required: true },
    availability: { type: String, required: true },
    picture: { type: [String], required: true },
    color: { type: String, required: true }
  },
  { timestamps: true, collection: 'auto' }
)

const AutoModel = mongoose.model('auto', autoSchema, 'auto')

module.exports = AutoModel

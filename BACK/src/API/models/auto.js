const mongoose = require('mongoose')

const autoSchema = new mongoose.Schema(
  {
    Vin: { type: String, required: true },
    Brand: { type: String, required: true },
    Model: { type: String, required: true },
    Type: { type: String, required: true },
    manufactureYear: { type: Number, required: true },
    kilometer: { type: Number, required: true },
    state: { type: String, required: true },
    price: { type: Number, required: true },
    acquisitionDate: { type: Date, required: true },
    availability: { type: String, required: true },
    picture: { type: String, required: true },
    color: { type: String, required: true }
  },
  { timestamps: true, collection: 'auto' }
)

const AutoModel = mongoose.model('auto', autoSchema, 'auto')

module.exports = AutoModel

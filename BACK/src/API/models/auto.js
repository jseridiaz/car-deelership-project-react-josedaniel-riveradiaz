const mongoose = require("mongoose")

const autoSchema = new mongoose.Schema(
   {
      vin: { type: String, require: true },
      brand: { type: String, require: true },
      model: { type: String, require: true },
      type: { type: String, require: true },
      manufactureYear: { type: Number, require: true },
      kilometer: { type: Number, require: true },
      state: { type: String, require: true },
      price: { type: Number, require: true },
      acquisitionDate: { type: Date, require: true },
      availability: { type: String, require: true },
      picture: { type: [String], require: true },
      color: { type: String, require: true },
   },
   { timestamps: true, collection: "auto" },
)

const AutoModel = mongoose.model("auto", autoSchema, "auto")

module.exports = AutoModel

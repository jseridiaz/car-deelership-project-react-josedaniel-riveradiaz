const mongoose = require("mongoose")

const autoSchema = new mongoose.Schema(
   {
      vin: { type: String },
      brand: { type: String },
      model: { type: String },
      type: { type: String },
      manufactureYear: { type: Number },
      kilometer: { type: Number },
      state: { type: String },
      price: { type: Number },
      acquisitionDate: { type: Date },
      availability: { type: String },
      picture: { type: [String] },
      color: { type: String },
   },
   { timestamps: true, collection: "auto" },
)

const AutoModel = mongoose.model("auto", autoSchema, "auto")

module.exports = AutoModel

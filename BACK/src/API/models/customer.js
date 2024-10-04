const mongoose = require("mongoose")

const CustomerSchema = new mongoose.Schema(
   {
      profile: { type: mongoose.Types.ObjectId, ref: "userAutos", required: true },
      buys: { type: [mongoose.Types.ObjectId], ref: "autoModel" },
      reserves: { type: [mongoose.Types.ObjectId], ref: "autoModel" },
      reviews: { type: [String] },
      favourites: { type: [mongoose.Types.ObjectId], ref: "autoModel" },
   },
   { timestamps: true, collection: "customer" },
)

const CustomerModel = mongoose.model("customer", CustomerSchema, "customer")
module.exports = CustomerModel

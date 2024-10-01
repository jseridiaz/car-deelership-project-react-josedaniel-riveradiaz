const mongoose = require("mongoose")

const CustomerSchema = new mongoose.Schema(
   {
      profile: { type: mongoose.Types.ObjectId, ref: "userAutos", required: true },
      buys: { type: [String] },
      reviews: { type: [String] },
      favourites: { type: [mongoose.Types.ObjectId], ref: "auto", trim: true },
   },
   { timestamps: true, collection: "Customer" },
)

const Customer = mongoose.model("Customer", CustomerSchema, "Customer")

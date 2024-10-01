const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema(
   {
      name: { type: String, required: true, trim: true },
      surname: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
      age: { type: Date, required: true, trim: true },
      rol: {
         type: String,
         default: "user",
         trim: true,
         enum: ["user", "admin"],
         required: true,
      },
      favourites: { type: String, required: true, enum: ["cars", "SUV", "Truck"] },
      password: { type: String, required: true, trim: true },
   },
   { timestamps: true, collection: "userAutos" },
)
userSchema.pre("save", function () {
   this.password = bcrypt.hashSync(this.password, 10)
})
const User = mongoose.model("userAutos", userSchema, "userAutos")

module.exports = User

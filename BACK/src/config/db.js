const mongoose = require("mongoose")
const bbddConection = async () => {
   try {
      await mongoose.connect(
         `mongodb+srv://jseridiaz:${process.env.DB_KEY}@cluster0.fwv6abn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
      )
      console.log("BBDD connected")
   } catch (err) {
      console.log("Error is happend in the conection to BBDD. Type error:" + err)
   }
}
module.exports = { bbddConection }

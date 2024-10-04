const logicPutCustomer = (reserves, favourites, buys, reviews) => {
   if (reserves) {
      updateOperations.$addToSet.reserves = { $each: reserves }
      updateOperations.$pull.reserves = { $in: reserves }
   }
   if (buys) {
      updateOperations.$addToSet.buys = { $each: buys }
      updateOperations.$pull.buys = { $in: buys }
   }
   if (favourites) {
      updateOperations.$addToSet.favourites = { $each: favourites }
      updateOperations.$pull.favourites = { $in: favourites }
   }
   if (reviews) {
      updateOperations.$addToSet.reviews = { $each: reviews }
      updateOperations.$pull.reviews = { $in: reviews }
   }
}
module.exports = logicPutCustomer

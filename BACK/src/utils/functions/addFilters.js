const addFilters = (
   object,
   availability,
   minPrice,
   maxPrice,
   minKm,
   maxKm,
   minYear,
   maxYear,
) => {
   if (availability) object.availability = availability
   if (minPrice && maxPrice) {
      object.price = { $gte: parseInt(minPrice), $lte: parseInt(maxPrice) }
   } else if (minPrice) {
      object.price = { $gte: parseInt(minPrice) }
   } else if (maxPrice) {
      object.price = { $lte: parseInt(maxPrice) }
   }
   if (minKm && maxKm) {
      object.kilometer = { $gte: parseInt(minKm), $lte: parseInt(maxKm) }
   } else if (minKm) {
      object.kilometer = { $gte: parseInt(minKm) }
   } else if (maxKm) object.kilometer = { $lte: parseInt(maxKm) }
   if (minYear && maxYear) {
      object.manufactureYear = { $gte: parseInt(minYear), $lte: parseInt(maxYear) }
   } else if (minYear) {
      object.manufactureYear = { $gte: parseInt(minYear) }
   } else if (maxYear) {
      object.manufactureYear = { $lte: parseInt(maxYear) }
   }
}
module.exports = { addFilters }

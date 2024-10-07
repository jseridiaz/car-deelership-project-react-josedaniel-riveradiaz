const getColor = element => {
   const color = element.replaceAll(".", ",")

   const r = color.slice(1, color.indexOf(","))

   const g = color.slice(color.indexOf(",") + 2, color.lastIndexOf(","))
   const b = color.slice(color.lastIndexOf(",") + 2, color.length - 1)

   return { r, g, b }
}
module.exports = { getColor }

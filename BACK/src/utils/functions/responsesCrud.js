const res200 = (req, res, next, model, message = "Fetch succesfully") =>
   res.status(200).json({ message, res: model })

const res201 = (req, res, next, model, message = "Fetch created succesfully") =>
   res.status(201).json({ message, res: model })

const res400 = (req, res, next, error) => {
   res.status(400).json({ message: error })
}
module.exports = { res200, res201, res400 }

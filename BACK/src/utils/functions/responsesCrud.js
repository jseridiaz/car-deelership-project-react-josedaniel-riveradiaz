const res200 = (req, res, next, model) =>
  res.status(200).json({ message: 'fetch succesfull', res: model })

const res400 = (req, res, next, error) => {
  res.status(400).json({ message: 'Fail by App fetching. Error Type:' + error })
}
module.exports = { res200, res400 }

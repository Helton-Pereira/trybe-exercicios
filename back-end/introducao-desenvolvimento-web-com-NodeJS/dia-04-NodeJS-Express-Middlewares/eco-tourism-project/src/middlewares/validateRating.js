module.exports = (req, res, next) => {
  const { rating } = req.body.description;
  
  const ratingNumber = Number.isInteger(rating);

  if (ratingNumber < 1 || ratingNumber > 5) {
    return res.status(400).json({ message: 'O campo rating deve ser um número inteiro entre 1 e 5' })
  }
  next();
}
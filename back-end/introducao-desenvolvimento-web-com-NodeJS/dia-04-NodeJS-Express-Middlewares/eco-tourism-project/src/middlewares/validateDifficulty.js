module.exports = (req, res, next) => {
  const { difficulty } = req.body.description;
  const difficultyLevels = ['Fácil', 'Médio', 'Difícil'];

  if (!difficultyLevels.includes(difficulty)) {
    return res.status(400).json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\''})
  }
  next();
}
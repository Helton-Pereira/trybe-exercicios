module.exports = (req, res, next) => {
    const name = req.body.name;
    if (!name) {
      return res.status(400).json({ message: 'O campo name é obrigatório' })
    }
    if (name.length < 4) {
      return res.status(400).json({ message: 'O campo name dete ter ao menos 4 caracteres' })
    }
    next();
  }
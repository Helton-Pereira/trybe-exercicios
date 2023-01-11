const express = require('express');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateDescription = require('./middlewares/validateDescription');
const validateDifficulty = require('./middlewares/validateDifficulty');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateRating = require('./middlewares/validateRating');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello!'})
})

app.post('/activities',
  validateCreatedAt,
  validateDifficulty,
  validateName,
  validatePrice,
  validateDescription,
  validateRating,
  (_req, res) => {

  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' })
})

app.post('/signup', (req, res) => {
  
})

module.exports = app;
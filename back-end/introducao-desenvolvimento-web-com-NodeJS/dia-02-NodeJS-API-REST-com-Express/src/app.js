const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

app.use(express.json());

const moviesPath = path.resolve(__dirname, './movies.json');

const getMovies = async () => {
  try {
    const data = await fs.readFile(path.resolve(moviesPath));
    const response = await JSON.parse(data);
    console.log(response);
    return response;
} catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

app.get('/movies', async (req, res) => {
  try {
    const movies = await getMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query;
    const movies = await getMovies();

    if (q) {
      const filteredMovies = movies.filter((e) => e.movie.includes(q));
      return res.status(200).json(filteredMovies);
    }
    res.status(200).end();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
})

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const movies = await getMovies();
    const oneMovie = movies.find((movie) => movie.id === Number(id));
    res.status(200).json(oneMovie);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const movies = await getMovies();
    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
    };
    const allMovies = JSON.stringify([...movies, newMovie]);
    await fs.writeFile(moviesPath, allMovies);

    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const { id } = req.params;
    const movies = await getMovies();

    const index = movies.findIndex((e) => e.id === Number(id));

    movies[index] = { id: Number(id), movie, price };
    
    const updateMovie = JSON.stringify(movies);
    await fs.writeFile(moviesPath, updateMovie);

    res.status(200).json(movies[index]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await getMovies();
    const filteredMovies = movies.filter((movie) => movie.id !== Number(id));

    const updateMovie = JSON.stringify(filteredMovies);
    await fs.writeFile(moviesPath, updateMovie);

    res.status(204).end();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;

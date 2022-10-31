const fs = require('fs').promises;
const path = require('path');

const moviesPath = path.resolve(__dirname, '../movies.json');

const getMovies = async () => {
  try {
    const data = await fs.readFile(path.resolve(moviesPath));
    const response = await JSON.parse(data);
    return response;
} catch (error) {
    console.log(`Arquivo não pôde ser lido: ${error}`);
  }
};

exports.modules = getMovies;
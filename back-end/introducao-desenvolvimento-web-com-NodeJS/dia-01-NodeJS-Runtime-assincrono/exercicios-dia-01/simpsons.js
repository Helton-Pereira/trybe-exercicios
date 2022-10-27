const fs = require('fs').promises;

const readAll = async () => {
  try {
    const data = await fs.readFile('./simpsons.json');
    const responses = await JSON.parse(data)
    const result = responses.forEach((response) => {
      console.log(`${response.id} - ${response.name}`)
    })
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

const main = async () => {
  await readAll()
}

main();

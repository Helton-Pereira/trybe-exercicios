const app = require('./app');
const connection = require('./db/connection');

const port = 3001;

app.listen(port, async () => {
  console.log(`API Trubecash está sendo executado na porta ${port}`);

  const [ result ] = await connection.execute('SELECT 1');
  if (result) {
    console.log('MySQL connection OK')
  }
});

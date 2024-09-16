const express = require('express');

const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/delay', (req, res) => {
  setTimeout(() => {
    res.send('Este mensaje fue retrasado por 3 segungos');
  }, 3000);
});

module.exports = app;


if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}


const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('aaaa');
});

app.listen(port, () => {
  console.log(`This app is listening to localhost:${port}`);
});

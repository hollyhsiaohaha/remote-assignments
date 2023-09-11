const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extend: false }));

app.get('/', (req, res) => {
  res.send('Week3 assignment api');
});

app.get('/data', (req, res) => {
  const { number } = req.query;
  if (!number) {
    res.send('Lack of Parameter');
  }
  if (!(Number(number))) {
    res.send('Wrong Parameter');
  }
  const num = Number(number);
  if (!Number.isInteger(num)) {
    res.send('Wrong Parameter(should be interger)');
  } else {
    const sum = ((num + 1) * num) / 2;
    res.send(`${sum}`);
  }
});

app.listen(port, () => {
  console.log(`This app is listening to localhost:${port}`);
});

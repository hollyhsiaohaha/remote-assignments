const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extend: false }));
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Week3 assignment api'));

app.get('/data', (req, res) => {
  const { number } = req.query;
  if (!number) {
    return res.send('Lack of Parameter');
  }
  if (!(Number(number))) {
    return res.send('Wrong Parameter');
  }
  const num = Number(number);
  if (!Number.isInteger(num)) {
    return res.send('Wrong Parameter(should be interger)');
  }
  const sum = ((num + 1) * num) / 2;
  return res.send(`${sum}`);
});

app.listen(port, () => {
  console.log(`This app is listening to localhost:${port}`);
});

const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');
// eslint-disable-next-line import/no-extraneous-dependencies
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

// eslint-disable-next-line import/no-extraneous-dependencies
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({ extend: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.set('view engine', 'ejs');

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
    return res.send('Wrong Parameter (should be interger)');
  }
  if (num < 0) {
    return res.send('Wrong Parameter (should be greater than 0)');
  }
  const sum = ((num + 1) * num) / 2;
  return res.send(`${sum}`);
});

app.get('/myName', (req, res) => {
  const { userName } = req.cookies;
  if (userName) {
    return res.send(`Your user name is: ${userName}`);
  }
  return res.render('trackName.html');
});

app.get('/trackName', (req, res) => {
  res.cookie('userName', req.query.name);
  return res.send('cookie created'); // 如果刪掉這行就會報錯？why
});

app.listen(port, () => {
  console.log(`This app is listening to localhost:${port}`);
});

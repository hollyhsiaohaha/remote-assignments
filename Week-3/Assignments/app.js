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
    // return res.send('Lack of Parameter'); //for AJAX
    return res.send({ result: 'Lack of Parameter' });
  }
  if (!(Number(number))) {
    // return res.send('Wrong Parameter'); //for AJAX
    return res.send({ result: 'Wrong Parameter' });
  }
  const num = Number(number);
  if (!Number.isInteger(num)) {
    // return res.send('Wrong Parameter (should be interger)'); //for AJAX
    return res.send({ result: 'Wrong Parameter (should be interger)' });
  }
  if (num < 0) {
    // return res.send('Wrong Parameter (should be greater than 0)'); //for AJAX
    return res.send({ result: 'Wrong Parameter (should be greater than 0)' });
  }
  const sum = ((num + 1) * num) / 2;
  // return res.send(`${sum}`); //for AJAX
  return res.send({ result: `${sum}` });
});

app.get('/myName', (req, res) => {
  const { userName } = req.cookies;
  if (userName) {
    // return res.send({ result: `Your user name is: ${userName}` });
    return res.send(`Your user name is: ${userName}`);
  }
  return res.render('trackName.html');
});

app.get('/trackName', (req, res) => {
  const userName = req.query.name;
  res.cookie('userName', userName);
  return res.send({ result: `user name: ${userName} has been ` });
  // res.end(); // 也可以呼叫 res.end() ， res.send() 內部已經幫忙呼叫了
});

app.listen(port, () => {
  console.log(`This app is listening to localhost:${port}`);
});

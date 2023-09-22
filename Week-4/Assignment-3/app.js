const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');
// eslint-disable-next-line import/no-extraneous-dependencies
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extend: false }));
app.use(cookieParser());
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const apiRoutes = require('./routes/api');
const mainRoutes = require('./routes');

app.use(mainRoutes);
app.use('/api', apiRoutes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// customized Error-handling middleware
app.use((err, req, res, next) => {
  res.status(err.status);
  res.render('error', { error: err });
});

app.listen(port, () => {
  console.log(`This app is listening to localhost:${port}`);
});

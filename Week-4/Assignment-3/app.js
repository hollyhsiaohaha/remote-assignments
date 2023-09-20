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

// eslint-disable-next-line import/no-extraneous-dependencies
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');

const mainRoutes = require('./routes');
const apiRoutes = require('./routes/api');

app.use(mainRoutes);
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`This app is listening to localhost:${port}`);
});

const app = require('express')();
const bodyParser = require('body-parser');
const router = require('./routes/api');
const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL || require('./config.js');
const { handle404s, handle400s, handle500s } = require('./errors');

mongoose.connect(DB_URL,{ useNewUrlParser: true })
.then(() => console.log(`Connected to ${DB_URL}`))
.catch(console.log);

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.send('Welcome to my home-page...');
});

app.use('/api', router)

app.use(handle404s);
app.use(handle400s);
app.use(handle500s);

module.exports = app;
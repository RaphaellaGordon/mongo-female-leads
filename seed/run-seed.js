const seedDB = require('./seed');
const mongoose = require('mongoose');
const DB_URL = require('../config.js'); // process.env.DB_URL
const data = require('./testData'); // switch between testData and devData

mongoose.connect(DB_URL, { useNewUrlParser: true })
  .then(() => {
    return seedDB(data)
  })
  .then(() => {
    console.log('Database successfully seeded')
    mongoose.disconnect();
  })
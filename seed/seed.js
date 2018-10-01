const mongoose = require('mongoose');
const { Actress, Film, Genre } = require('../models');
const { formatFilmData } = require('./utils');

const seedDB = ({ actressData, filmData, genreData }) => {
  return mongoose.connection.dropDatabase()
  .then(() => {
    return Promise.all([
      Actress.insertMany(actressData),
      Genre.insertMany(genreData)
    ])
  })
  .then(([actressDocs, genreDocs]) => {
    return Promise.all([
      actressDocs,
      genreDocs,
      Film.insertMany(formatFilmData(filmData, actressDocs, genreDocs))
    ])
  })
  // .then(([actressDocs, genreDocs, filmDocs]) => {
  //   console.log(filmDocs[0])
  // })
}

module.exports = seedDB;
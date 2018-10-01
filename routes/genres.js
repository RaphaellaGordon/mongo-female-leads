const genresRouter = require('express').Router();
const { getGenres, getGenreByName, postGenre, getFilmsByGenre } = require('../controllers/genres');

genresRouter.route('/')
  .get(getGenres)
  .post(postGenre)

genresRouter.route('/:genre')
  .get(getGenreByName)

genresRouter.route('/:genre/films')
  .get(getFilmsByGenre)

module.exports = genresRouter;
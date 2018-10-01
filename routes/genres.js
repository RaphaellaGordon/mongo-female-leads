const genresRouter = require('express').Router();
const { getGenres, getGenreByName, postGenre } = require('../controllers/actresses');

genresRouter.route('/')
  .get(getGenres)
  .post(postGenre)

genresRouter.route('/:genre')
  .get(getGenreByName)

module.exports = actressesRouter;
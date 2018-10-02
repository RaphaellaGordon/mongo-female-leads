const filmsRouter = require('express').Router();
const { getFilms, postFilm, getFilmByName, getActressByFilm } = require('../controllers/films');

filmsRouter.route('/')
  .get(getFilms)
  .post(postFilm)

genresRouter.route('/:film')
  .get(getFilmByName)

genresRouter.route('/:film/actress')
  .get(getActressByFilm)

module.exports = filmsRouter;
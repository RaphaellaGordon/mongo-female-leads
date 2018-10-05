const filmsRouter = require('express').Router();
const { getFilms, postFilm, getFilmByName, updateVote, getActressByFilm } = require('../controllers/films');

filmsRouter.route('/')
  .get(getFilms)
  .post(postFilm)

filmsRouter.route('/:film')
  .get(getFilmByName)
  .patch(updateVote)

filmsRouter.route('/:film/actress')
  .get(getActressByFilm)

module.exports = filmsRouter;
const actressesRouter = require('express').Router();
const { getActresses, getActressByName, postActress, getFilmByActress } = require('../controllers/actresses');

actressesRouter.route('/')
  .get(getActresses)
  .post(postActress)

actressesRouter.route('/:actress')
  .get(getActressByName)

actressesRouter.route('/:actress/films')
  .get(getFilmByActress)

module.exports = actressesRouter;
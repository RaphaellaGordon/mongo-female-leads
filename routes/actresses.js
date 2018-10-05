const actressesRouter = require('express').Router();
const { getActresses, getActressByName, postActress, deleteActressByName, getFilmByActress } = require('../controllers/actresses');

actressesRouter.route('/')
  .get(getActresses)
  .post(postActress)

actressesRouter.route('/:actress')
  .get(getActressByName)
  .delete(deleteActressByName)

actressesRouter.route('/:actress/films')
  .get(getFilmByActress)

module.exports = actressesRouter;
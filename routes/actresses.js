const actressesRouter = require('express').Router();
const { getActresses, getActressByName, postActress, getFilmsByActress } = require('../controllers/actresses');

actressesRouter.route('/')
  .get(getActresses)
  .post(postActress)

actressesRouter.route('/:actress')
  .get(getActressByName)

module.exports = actressesRouter;
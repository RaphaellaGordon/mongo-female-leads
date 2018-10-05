const router = require('express').Router();
const actressesRouter = require('./actresses');
const genresRouter = require('./genres');
const filmsRouter = require('./films');

router.route('/', (req, res, next) => {
  res.send('index')
})

router.use('/actresses', actressesRouter);
router.use('/genres', genresRouter);
router.use('/films', filmsRouter);

module.exports = router;
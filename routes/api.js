const router = require('express').Router();
const actressesRouter = require('./actresses');
// const genresRouter = require('./genres');

router.route('/', (req, res, next) => {
  res.send('index')
})

router.use('/actresses', actressesRouter);
// router.use('/genres', genresRouter);

module.exports = router;
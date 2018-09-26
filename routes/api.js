const router = require('express').Router();
const actressesRouter = require('./actresses');

router.route('/', (req, res, next) => {
  res.send('index')
})

router.use('/actresses', actressesRouter);

module.exports = router;
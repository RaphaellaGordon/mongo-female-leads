exports.handle400s = (err, req, res, next) => {
  if (err.name === 'ValidationError' || err.status === 400) {
    res.status(400).send({ msg: err.message || 'Bad request' })
  }
  else next(err)
}

exports.handle404s = (err, req, res, next) => {
  if (err.name === 'CastError' || err.status === 404) {
    res.status(404).send({ msg: err.message || 'Not found' })
  }
  else next(err)
}

exports.handle500s = (err, req, res, next) => {
  console.log(err)
  res.status(500).send('Internal server error');
}
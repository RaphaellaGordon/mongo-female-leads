const { Genre, Film } = require('../models');

const getGenres = (req, res, next) => {
  Genre.find()
  .then(genres => {
    res.status(200).send({ genres })
  })
  .catch(next)
}

const postGenre = (req, res, next) => {
  const {genre} = req.body
  const newGenre = new Genre({
    genre
  })
  newGenre.save()
  .then(genre => {
    res.status(201).send({genre})
  })
  .catch(next)
}

const getGenreByName = (req, res, next) => {
  Genre.findOne({genre: req.params.genre})
  .then(genre => {
    if(Number(req.params.genre)) throw {status: 400}
    if (!genre) throw { status: 404 }
    res.status(200).send({genre})
  })
  .catch(next)
}

const getFilmsByGenre = (req, res, next) => {
  Film.find({genre: req.params.genre})
  .then(films => {
    if(Number(req.params.genre)) throw {status: 400}
    if (films.length === 0) throw { status: 404 }
    res.status(200).send({films})
  })
  .catch(next)
}

module.exports = { getGenres, getGenreByName, postGenre, getFilmsByGenre };
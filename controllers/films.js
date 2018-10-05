const { Film, Actress } = require('../models');

const getFilms = (req, res, next) => {
  Film.find()
  .then(films => {
    res.status(200).send({ films })
  })
  .catch(next)
}

const postFilm = (req, res, next) => {
  const {name, year, poster_url, genre, lead_character, lead_character_url, quote, lead_actress} = req.body
  const newFilm = new Film({
    name,
    year,
    poster_url,
    genre,
    lead_character,
    lead_character_url,
    quote,
    lead_actress
  })
  newFilm.save()
  .then(film => {
    res.status(201).send({film})
  })
  .catch(next)
}

const getFilmByName = (req, res, next) => {
  Film.findOne({name: req.params.film})
  .then(film => {
    if(!/\w/.test(req.params.film)) throw {status: 400}
    if (!film) throw { status: 404 }
    res.status(200).send({film})
  })
  .catch(next)
}

const updateVote = (req, res, next) => {
  if(req.query.vote === 'up') {
    Film.findOneAndUpdate({name: req.params.film}, {$inc: {votes: 1}}, {new: true})
    .then(film => {
      if(!/\w/.test(req.params.film)) throw {status: 400}
      if (!film) throw { status: 404 }
      res.status(200).send({film})
    })
    .catch(next)
  } else if(req.query.vote === 'down') {
    Film.findOneAndUpdate({name: req.params.film}, {$inc: {votes: -1}}, {new: true})
    .then(film => {
      if(!/\w/.test(req.params.film)) throw {status: 400}
      if (!film) throw { status: 404 }
      res.status(200).send({film})
    })
    .catch(next)
  } else {
    throw {status: 400, msg: 'Bad request'}
  }
}

const getActressByFilm = (req, res, next) => {
  Film.findOne({name: req.params.film})
  .then(film => {
    if(!/\w/.test(req.params.film)) throw {status: 400}
    if (!film) throw { status: 404 }
    return Actress.findOne({name: film.lead_actress})
  })
  .then(actress => {
    res.status(200).send({actress})
  })
  .catch(next)
}


module.exports = { getFilms, postFilm, getFilmByName, updateVote, getActressByFilm };
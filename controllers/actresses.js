const { Actress, Film } = require('../models');

const getActresses = (req, res, next) => {
  Actress.find()
  .then(actresses => {
    res.status(200).send({ actresses })
  })
  .catch(next)
}

const postActress = (req, res, next) => {
  const {name, img_url} = req.body
  const newActress = new Actress({
    name,
    img_url
  })
  newActress.save()
  .then(actress => {
    res.status(201).send({actress})
  })
  .catch(next)
}

const getActressByName = (req, res, next) => {
  Actress.findOne({name: req.params.actress})
  .then(actress => {
    if(Number(req.params.actress)) throw {status: 400}
    if (!actress) throw { status: 404 }
    res.status(200).send({actress})
  })
  .catch(next)
}

const getFilmByActress = (req, res, next) => {
  Film.find({lead_actress: req.params.actress})
  .then(films => {
    if(Number(req.params.actress)) throw {status: 400}
    if (films.length === 0) throw { status: 404 }
    res.status(200).send({films})
  })
  .catch(next)
}

const deleteActressByName = (req, res, next) => {
  Actress.findOneAndRemove({name: req.params.actress})
  .then(actress => {
    if (!actress) throw { status: 404 }
    res.status(200).send({msg: "actress has been deleted"})
  })
  .catch(next)
}

module.exports = { getActresses, getActressByName, postActress, deleteActressByName, getFilmByActress };
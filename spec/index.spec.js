process.env.NODE_ENV = 'test';
const data = require('../seed/testData');
const seedDB = require('../seed/seed')
const {expect} = require('chai');
const app = require('../app.js');
const request = require('supertest')(app);
const mongoose = require('mongoose');
//actress genre film

describe('/api', () => {

  let actresses, genres, films;

  beforeEach(function() {
    return seedDB(data)
    .then((docs) => {
      [actresses, genres, films] = docs
    })
  });

  after(() => mongoose.disconnect())

  describe('/actresses', () => {
    it('GET returns an array of actress objects and 200 status code', () => {
      return request.get('/api/actresses')
      .expect(200)
      .then(res => {
        expect(res.body.actresses).to.have.lengthOf(actresses.length)
        expect(res.body.actresses[0].name).be.equal(actresses[0].name)
        expect(res.body.actresses[0].img_url).be.equal(actresses[0].img_url)
      })
    })
    it('POST adds a new actress and sends a 201 status code', () => {
      return request.post('/api/actresses/')
      .send({name: 'Emma Watson', img_url: 'https://m.media-amazon.com/images/M/MV5BMTQ3ODE2NTMxMV5BMl5BanBnXkFtZTgwOTIzOTQzMjE@._V1_UY317_CR21,0,214,317_AL_.jpg'})
      .expect(201)
      .then(res => {
        expect(res.body.actress.name).to.equal('Emma Watson')
        expect(res.body.actress.img_url).to.equal('https://m.media-amazon.com/images/M/MV5BMTQ3ODE2NTMxMV5BMl5BanBnXkFtZTgwOTIzOTQzMjE@._V1_UY317_CR21,0,214,317_AL_.jpg')
      })
    })
    it('POST ERROR returns error message and 400 status code', () => {
      return request.post('/api/actresses/')
      .send({name: 'em', img_url: 'https://m.media-amazon.com/images/M/MV5BMTQ3ODE2NTMxMV5BMl5BanBnXkFtZTgwOTIzOTQzMjE@._V1_UY317_CR21,0,214,317_AL_.jpg'})
      .expect(400)
      .then(res => {
        expect(res.body.msg).to.equal('actresses validation failed: name: Path `name` (`em`) is shorter than the minimum allowed length (3).')
      })
    })
    describe('/:actress', () => {
      it('GET returns an object of requested actress and 200 status code', () => {
        return request.get(`/api/actresses/${actresses[0].name}`)
        .expect(200)
        .then(res => {
          expect(res.body.actress.name).be.equal(actresses[0].name)
          expect(res.body.actress.img_url).be.equal(actresses[0].img_url)
        })
      })
      it('GET ERROR returns error message and 400 status code', () => {
        return request.get('/api/actresses/5')
        .expect(400)
        .then(res => {
          expect(res.body.msg).to.equal('Bad request')
        })
      })
      it('GET ERROR returns error message and 404 status code', () => {
        return request.get('/api/actresses/abcdef')
        .expect(404)
        .then(res => {
          expect(res.body.msg).to.equal('Not found')
        })
      })
    })
  })
})
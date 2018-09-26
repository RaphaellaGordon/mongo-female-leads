const mongoose = require('mongoose');
const { Schema } = mongoose;

const FilmSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  poster_url: {
    type: String
  },
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'genres',
    required: true
  },
  votes: {
    type: Number,
    default: 0
  },
  lead_character: {
    type: String,
    required: true
  },
  lead_character_img_url: {
    type: String
  },
  quote: {
    type: String
  },
  lead_actress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'actresses',
    required: true
  }
})

module.exports = mongoose.model('Films', FilmSchema)
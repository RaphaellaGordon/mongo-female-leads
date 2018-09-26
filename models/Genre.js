const mongoose = require('mongoose');
const { Schema } = mongoose;

const GenreSchema = new Schema ({
  genre: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('genres', GenreSchema)
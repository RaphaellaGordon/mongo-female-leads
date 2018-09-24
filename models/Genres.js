const mongoose = require('mongoose');
const { Schema } = mongoose;

const GenreSchema = new Schema ({
  type: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('genres', GenreSchema)
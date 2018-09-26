const mongoose = require('mongoose');
const { Schema } = mongoose;

const ActressSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  img_url: {
    type: String
  }
})

module.exports = mongoose.model('actresses', ActressSchema)
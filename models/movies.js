const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    trim: true,
  },
  Year: {
    type: String,
    required: true,
    trim: true,
  },
  imdbID: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  Type: {
    type: String,
    required: true,
    trim: true,
  },
  Poster: {
    type: String,
    required: true,
    trim: true,
  },
})

const Movies = mongoose.model('user', movieSchema)
module.exports = Movies

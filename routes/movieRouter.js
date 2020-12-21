const router = require('express').Router()
const {
  addMovie,
  deleteMovie,
  getMovies,
} = require('../controllers/movieController')

// @route GET api/movies
// @desc Get all movies
// @access Public
router.get('/', getMovies)

// @route POST api/movies
// @desc Add a movie
// @access Public
router.post('/', addMovie)

// @route DELETE api/:movieId
// @desc Delete a movie
// @access Public
router.delete('/:movieId', deleteMovie)

module.exports = router

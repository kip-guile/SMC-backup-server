const Movies = require('../models/movies')
const { validateMovieObject } = require('../middleware/validateMovieObject')

// controller to add movie
const addMovie = (req, res) => {
  const { errors, valid } = validateMovieObject(req.body)
  if (!valid) return res.status(400).json(errors)
  const { Title, Year, imdbID, Type, Poster } = req.body

  Movies.findOne({ imdbID }).then((movie) => {
    if (movie)
      return res.status(400).json({
        message: 'Movie already saved',
      })
    const newMovie = new Movies({
      Title,
      Year,
      imdbID,
      Type,
      Poster,
    })

    newMovie
      .save()
      .then((movie) => {
        return res.status(201).json(movie)
      })
      .catch((err) => {
        return res.status(500).json({ message: err.message })
      })
  })
}

// controller to get all movies
async function getMovies(req, res) {
  try {
    const movies = await Movies.find({})
    if (movies.length === 0) {
      return res.status(404).json({ message: 'no movies available' })
    }
    return res.status(200).json(movies)
  } catch (err) {
    res.status(500).json(err.message)
  }
}

// controller to delete photo
async function deleteMovie(req, res) {
  const imdbID = req.params.movieId

  try {
    const movie = await Movies.findOne({ imdbID })
    if (!movie) {
      return res.status(404).json({ message: 'movie doesnt exist' })
    }
    await Movies.deleteOne({ imdbID })
    const movies = await Movies.find({})
    return res.status(200).json(movies)
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

module.exports = { deleteMovie, addMovie, getMovies }

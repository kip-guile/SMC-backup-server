const { isEmpty } = require('../helpers/isEmpty')

// middleware to validate input
exports.validateMovieObject = (data) => {
  const errors = {}
  let { Title, Year, imdbID, Type, Poster } = data
  Title = Title || ''
  Year = Year || ''
  imdbID = imdbID || ''
  Type = Type || ''
  Poster = Poster || ''

  if (isEmpty(Title)) errors.Title = 'Title is required'
  if (isEmpty(Year)) errors.Year = 'Year is required'
  if (isEmpty(imdbID)) errors.imdbID = 'imdbID is required'
  if (isEmpty(Type)) errors.Type = 'Type is required'
  if (isEmpty(Poster)) errors.Poster = 'Poster cant be empty'

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  }
}

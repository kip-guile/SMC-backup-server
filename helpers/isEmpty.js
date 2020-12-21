//helper to validate string
const isEmpty = (string) => {
  if (string.trim() === '') return true
  else return false
}

module.exports = { isEmpty }

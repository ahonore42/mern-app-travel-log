const bcrypt = require('bcrypt')
const saltRounds = 12

const generatePassword = async (password) => {
  const password_digest = await bcrypt.hash(password, saltRounds)
  return password_digest
}

const checkPassword = async (sentPassword, storedPassword) => {
  const passwordValid = await bcrypt.compare(sentPassword, storedPassword)
  return passwordValid
}

module.exports = {
  generatePassword,
  checkPassword
}

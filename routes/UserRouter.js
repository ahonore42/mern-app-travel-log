const Router = require('express').Router()
const UserController = require('../controllers/UserController')
const {
  createToken,
  verifyToken,
  getToken
} = require('../middleware/JwtHandler')

Router.get('/:user_id', UserController.GetProfile)
Router.post('/register', UserController.CreateUser)
Router.post('/login', UserController.SignInUser, createToken)
Router.get('/refresh/session', getToken, verifyToken)
// Students implement update password
module.exports = Router

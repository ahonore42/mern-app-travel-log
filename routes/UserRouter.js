const Router = require('express').Router()
const UserController = require('../controllers/UserController')

Router.get('/:user_id', UserController.GetProfile)
Router.post('/', UserController.CreateUser)

module.exports = Router

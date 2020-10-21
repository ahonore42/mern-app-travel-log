const Router = require('express').Router()
const PostController = require('../controllers/PostController')
const { getToken, verifyToken } = require('../middleware/JwtHandler')

Router.get('/', PostController.GetPosts)
Router.get('/:post_id', PostController.GetPostById)
Router.post('/:user_id', getToken, verifyToken, PostController.CreatePost)
Router.put('/:post_id', getToken, verifyToken, PostController.UpdatePost)
Router.delete('/:post_id', getToken, verifyToken, PostController.DeletePost)

module.exports = Router

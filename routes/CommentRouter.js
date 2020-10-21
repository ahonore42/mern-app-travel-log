const Router = require('express').Router()
const CommentController = require('../controllers/CommentController')
Router.post('/:post_id', CommentController.CreateComment)
Router.delete('/:comment_id', CommentController.RemoveComment)
Router.put('/:comment_id', CommentController.UpdateComment)

module.exports = Router

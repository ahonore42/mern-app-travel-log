const Router = require('express').Router()
const CommentController = require('../controllers/CommentController')
const { getToken, verifyToken } = require('../middleware/JwtHandler')
Router.post(
  '/:post_id/user/:user_id',
  getToken,
  verifyToken,
  CommentController.CreateComment
)
Router.delete(
  '/:post_id/remove/:comment_id',
  getToken,
  verifyToken,
  CommentController.RemoveComment
)
Router.put(
  '/:comment_id',
  getToken,
  verifyToken,
  CommentController.UpdateComment
)

module.exports = Router

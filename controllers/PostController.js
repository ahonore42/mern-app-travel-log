const { TravelLog, User, Comment } = require('../db/schema')

const GetPosts = async (req, res) => {
  try {
    const { page, limit } = req.query
    const offset = page === 1 ? 0 : Math.floor(parseInt(page) * parseInt(limit))
    const posts = await TravelLog.find()
      .limit(parseInt(limit))
      .skip(offset)
      .sort({ popularity_rating: 'desc' })
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const GetPostById = async (req, res) => {
  try {
    const post = await TravelLog.findById(req.params.post_id).populate(
      'comments'
    )
    res.send(post)
  } catch (error) {
    throw error
  }
}

const CreatePost = async (req, res) => {
  try {
  } catch (error) {}
}

const DeletePost = async (req, res) => {
  try {
  } catch (error) {}
}

const UpdatePost = async (req, res) => {
  try {
  } catch (error) {}
}

module.exports = {
  GetPosts,
  GetPostById,
  CreatePost,
  DeletePost,
  UpdatePost
}

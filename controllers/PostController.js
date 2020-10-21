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
    const newPost = new TravelLog({ ...req.body, user_id: req.params.user_id })
    newPost.save()
    res.send(newPost)
  } catch (error) {
    throw error
  }
}

const DeletePost = async (req, res) => {
  try {
    const post = await TravelLog.findById(req.params.post_id)
    await Comment.deleteMany({ _id: { $in: post.comments } })
    res.send({ msg: 'Post deleted' })
  } catch (error) {
    throw error
  }
}

const UpdatePost = async (req, res) => {
  try {
    const updatedPost = await TravelLog.findByIdAndUpdate(
      req.params.post_id,
      {
        ...req.body
      },
      { new: true, useFindAndModify: false }
    )
    res.send(updatedPost)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPosts,
  GetPostById,
  CreatePost,
  DeletePost,
  UpdatePost
}

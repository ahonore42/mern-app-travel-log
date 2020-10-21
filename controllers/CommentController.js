const { TravelLog, Comment } = require('../db/schema')

const CreateComment = async (req, res) => {
  try {
    const comment = new Comment({ ...req.body, user_id: req.params.user_id })
    await TravelLog.update(
      { _id: req.params.post_id },
      {
        $push: {
          comments: comment
        }
      }
    )
    comment.save()
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const RemoveComment = async (req, res) => {
  try {
    await Comment.deleteOne({ _id: req.params.comment_id })
    const updatedPost = await TravelLog.findByIdAndUpdate(
      req.params.post_id,
      { $pull: { comments: { _id: req.params.comment_id } } },
      { upsert: true, new: true }
    )
    res.send(updatedPost)
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    const updatedtComment = await Comment.findByIdAndUpdate(
      req.params.comment_id,
      { ...req.body }
    )
    res.send(updatedtComment)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateComment,
  RemoveComment,
  UpdateComment
}

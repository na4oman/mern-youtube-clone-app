import Comment from '../models/Comment.js'
import Video from '../models/Video.js'

export const addComment = async (req, res, next) => {
  const newComment = new Comment({
    ...req.body,
    userId: req.user.id,
  })
  try {
    const savedComment = await newComment.save()
    res.status(200).json(savedComment)
  } catch (error) {
    next(error)
  }
}

export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.commentId)
    const video = await Video.findById(req.params.commentId)

    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await Comment.findByIdAndDelete(req.params.commentId)
    }
    res.status(200).json('Comment has been successfully deleted!')
  } catch (error) {
    next(error)
  }
}

export const getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId })
    res.status(200).json(comments)
  } catch (error) {
    next(error)
  }
}

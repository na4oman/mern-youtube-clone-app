import { createError } from '../error.js'
import User from '../models/User.js'
import Video from '../models/Video.js'

export const updateUser = async (req, res, next) => {
  if (req.params.userId === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        {
          $set: req.body,
        },
        { new: true }
      )
      res.status(200).json(updatedUser)
    } catch (error) {
      next(error)
    }
  } else {
    next(createError(403, 'You are not authorized to update this user!'))
  }
}

export const deleteUser = async (req, res, next) => {
  if (req.params.userId === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.userId)
      res.status(200).json('User has been deleted')
    } catch (error) {
      next(error)
    }
  } else {
    next(createError(403, 'You are not authorized to update this user!'))
  }
}

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId)
    if (!user) return next(createError(404, 'User not found'))
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}

export const subscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push: { subscribedChannels: req.params.channelId },
    })

    await User.findByIdAndUpdate(req.params.channelId, {
      $inc: { subscribers: 1 },
    })
    res.status(200).json('Subscription successfull!')
  } catch (error) {
    next(error)
  }
}

export const unsubscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { subscribedUsers: req.params.channelId },
    })

    await User.findByIdAndUpdate(req.params.channelId, {
      $inc: { subscribers: -1 },
    })
    res.status(200).json('Unsubscription successfull!')
  } catch (error) {
    next(error)
  }
}

export const like = async (req, res, next) => {
  const userId = req.user.id
  const videoId = req.params.videoId

  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { likes: userId },
      $pull: { dislikes: userId },
    })
    res.status(200).json('Video has been liked.')
  } catch (error) {
    next(error)
  }
}

export const dislike = async (req, res, next) => {
  const userId = req.user.id
  const videoId = req.params.videoId

  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { dislikes: userId },
      $pull: { likes: userId },
    })
    res.status(200).json('Video has been disliked.')
  } catch (error) {
    next(error)
  }
}

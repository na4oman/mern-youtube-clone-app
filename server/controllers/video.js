import { createError } from '../error.js'
import User from '../models/User.js'
import Video from '../models/Video.js'

// create a video
export const createVideo = async (req, res, next) => {
  try {
    const newVideo = new Video({ userId: req.user.id, ...req.body })
    const savedVideo = await newVideo.save()
    res.status(200).json(savedVideo)
  } catch (error) {
    next(error)
  }
}

// update a video
export const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.videoId)
    if (!video) return next(createError(404, 'Video not found!'))

    if (req.user.id === video.userId) {
      const updatedVideo = await Video.findByIdAndUpdate(
        req.params.videoId,
        {
          $set: req.body,
        },
        { new: true }
      )
      res.status(200).json(updatedVideo)
    } else {
      return next(
        createError(403, 'You are not authorized to modify this video.')
      )
    }
  } catch (error) {
    next(error)
  }
}

// delete video
export const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.videoId)
    if (!video) return next(createError(404, 'Video not found!'))

    if (req.user.id === video.userId) {
      await Video.findByIdAndDelete(req.params.videoId)
      res.status(200).json('Video has been successfully deleted.')
    } else {
      return next(
        createError(403, 'You are not authorized to delete this video.')
      )
    }
  } catch (error) {
    next(error)
  }
}

// get video
export const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.videoId)
    if (!video) return next(createError(404, 'Video not found!'))
    res.status(200).json(video)
  } catch (error) {
    next(error)
  }
}

// add view
export const addView = async (req, res, next) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.videoId, {
      $inc: { views: 1 },
    })
    res.status(200).json('The view has been increased.')
  } catch (error) {
    next(error)
  }
}

// get random videos
export const randomVideos = async (req, res, next) => {
  try {
    const videos = await Video.aggregate([{ $sample: { size: 40 } }])
    res.status(200).json(videos)
  } catch (error) {
    next(error)
  }
}

// get trend videos
export const trendVideos = async (req, res, next) => {
  try {
    const videos = await Video.find().sort({ views: -1 })
    res.status(200).json(videos)
  } catch (error) {
    next(error)
  }
}

// get subscribed channels
export const subChannels = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id)
    const { subscribedChannels } = user

    const list = await Promise.all(
      subscribedChannels.map(async channelId => {
        return await Video.find({ userId: channelId })
      })
    )
    res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt))
  } catch (error) {
    next(error)
  }
}

// search by tags
export const getByTag = async (req, res, next) => {
  const tags = req.query.tags.split(',')

  try {
    const videos = await Video.find({ tags: { $in: tags } }).limit(20)
    res.status(200).json(videos)
  } catch (error) {
    next(error)
  }
}

// search by title
export const getByTitle = async (req, res, next) => {
  const query = req.query.q

  try {
    const videos = await Video.find({
      title: { $regex: query, $options: 'i' },
    }).limit(40)
    res.status(200).json(videos)
  } catch (error) {
    next(error)
  }
}

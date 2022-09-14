import express from 'express'
import {
  addView,
  createVideo,
  deleteVideo,
  getByTag,
  getByTitle,
  getVideo,
  randomVideos,
  subChannels,
  trendVideos,
  updateVideo,
} from '../controllers/video.js'
import { verifyToken } from '../verifyToken.js'

const router = express.Router()

router.post('/', verifyToken, createVideo) // create a video
router.put('/:videoId', verifyToken, updateVideo) // update a video
router.delete('/:videoId', verifyToken, deleteVideo) // delete a video
router.get('/find/:videoId', getVideo) // get video
router.put('/view/:videoId', addView) // add view count
router.get('/trend', trendVideos) // get trend videos
router.get('/random', randomVideos) // get random videos
router.get('/sub', verifyToken, subChannels) // get subscribed channels
router.get('/tags', getByTag) // search by tags
router.get('/search', getByTitle) // search by title

export default router

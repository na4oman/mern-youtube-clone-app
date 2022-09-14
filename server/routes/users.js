import express from 'express'
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribe,
  unsubscribe,
  updateUser,
} from '../controllers/user.js'
import { verifyToken } from '../verifyToken.js'

const router = express.Router()

// update user
router.put('/:userId', verifyToken, updateUser)

// delete user
router.delete('/:userId', verifyToken, deleteUser)

// get a user
router.get('/find/:userId', getUser)

// subscribe a user
router.put('/sub/:channelId', verifyToken, subscribe)

// unsubscribe a user
router.put('/unsub/:channelId', verifyToken, unsubscribe)

// like a video
router.put('/like/:videoId', verifyToken, like)

// dislike a video
router.put('/dislike/:videoId', verifyToken, dislike)

export default router

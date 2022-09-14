import express from 'express'
import {
  addComment,
  deleteComment,
  getComments,
} from '../controllers/comment.js'
import { verifyToken } from '../verifyToken.js'

const router = express.Router()

router.post('/', verifyToken, addComment) // create a comment
router.delete('/:commentId', verifyToken, deleteComment) // delete a comment
router.get('/:videoId', getComments) // get all comments for a specific video

export default router

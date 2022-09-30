import express from 'express'
import { googleAuth, signin, signup } from '../controllers/auth.js'

const route = express.Router()

// CREATE A USER
route.post('/signup', signup)

// SIGN IN
route.post('/signin', signin)

// GOOGLE AUTH
route.post('/google', googleAuth)

export default route

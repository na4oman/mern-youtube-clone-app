import express from 'express'
import { signin, signup } from '../controllers/auth.js'

const route = express.Router()

// CREATE A USER
route.post('/signup', signup)

// SIGN IN
route.post('/signin', signin)

// GOOGLE AUTH
route.post('/google', () => {})

export default route

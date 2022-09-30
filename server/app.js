import express from 'express'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import videoRoutes from './routes/videos.js'
import commentRouter from './routes/comments.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 6000

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
      throw err
    })
}

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/videos', videoRoutes)
app.use('/api/comments', commentRouter)

app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || 'Something went wrong.'

  return res.status(status).json({
    success: false,
    status,
    message,
  })
})

app.listen(PORT, () => {
  connectDB()
  console.log(`Server is listening on port ${PORT}`)
})

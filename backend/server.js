import express from 'express'
// const connectDB = require('./config/db');
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes  from './routes/userRoutes.js'

dotenv.config()

const app = express()

connectDB()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)

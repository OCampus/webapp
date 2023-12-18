import app from './app.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'

dotenv.config({ path: './config/.env' })

connectDB() // Connect to MongoDB

process.on('uncaughtException', (err) => {
  console.log('Shutting server down due to uncaught exception...')
  console.log(`Error: ${err.message}`)

  // Close server.
  process.exit(1)
})

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})

// Handle unhandled promise rejections.
process.on('unhandledRejection', err => {
  console.log(`Error: ${err.message}`)
  // Close server & exit process.
  console.log('Shutting server down due to unhandled promise rejections...')
  server.close(() => process.exit(1))
})

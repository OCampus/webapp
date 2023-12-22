import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import errorHandler from './middlewares/error.js'
import auth from './routes/auth.js'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use(auth)

app.use(errorHandler)
export default app

import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import errorHandler from './middlewares/error'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(errorHandler)

export default app

import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import errorHandler from './middlewares/error.js'
import auth from './routes/auth.js'
import profileRouter from './routes/profile.js'
import propertyRouter from './routes/property.js'
import reviewRouter from './routes/review.js'
import session from 'express-session'
import passport from './config/passport-setup.js'

const app = express()

// Body parser
app.use(express.json())
app.use(cookieParser())

// Session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  }
}))

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// CORS
app.use(cors({
  credentials: true
}))

app.get('/', (req, res) => {
  res.send('Welcome to Ocampus Backend')
})

// api endpoints
app.use(auth)
app.use(profileRouter)
app.use(propertyRouter)
app.use(reviewRouter)

app.use(errorHandler)
export default app

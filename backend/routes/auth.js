import express from 'express'
import { signup, login } from '../controllers/auth.js'
import passport from 'passport'

const router = express.Router()

// basic signup for landlord and student
router.post('/signup', signup)

// basic login for landlord and student
router.post('/login', login)

// login or signup  with google
// userType is needed only on signup to determine whether to create a landlord or student
// userType should be either 'Landlord' or 'Student' and be set in the query string
router.get('/google', (req, res, next) => {
  const userType = req.query.userType
  const state = userType ? JSON.stringify({ userType }) : undefined

  passport.authenticate('google', {
    scope: ['profile', 'email'],
    state
  })(req, res, next)
})

// google callback
router.get('/google/redirect', passport.authenticate('google', { failureRedirect: '/google' }), (req, res) => {
  return req.user
    ? res.status(200).json({ message: 'Google login successful.' })
    : res.status(401).json({ message: 'Google login failed.' })
})

export default router

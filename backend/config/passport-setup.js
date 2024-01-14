import passport from 'passport'
import { Strategy as JwtStrategy } from 'passport-jwt'
import User from '../models/user.js'
import Landlord from '../models/landlord.js'
import Student from '../models/student.js'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

const cookieExtractor = function (req) {
  let token = null
  if (req && req.cookies) {
    token = req.cookies.token
  }
  return token
}

// JWT passport strategy
const jwtOptions = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: process.env.JWT_SECRET
}
passport.use(new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const user = await User.findById(payload.sub)
    if (!user) {
      return done(null, false)
    }
    done(null, user)
  } catch (err) {
    return done(err, false)
  }
}))

/**
 *
 * Google OAuth2.0
 */

// serialize
passport.serializeUser((user, done) => {
  done(null, user.id)
})

// deserialize
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id)
  done(null, user)
})

// create user for google login
const createUser = async (email, userType, name, profile) => {
  const [firstName, lastName] = name.split(' ')
  const UserModel = userType === 'Landlord' ? Landlord : Student
  const user = new UserModel({ email, firstName, lastName, googleId: profile.id })
  user.loginHistory.push({ timestamp: new Date() })
  user.isLoggedIn = true
  await user.save()
  return user
}

// Google passport strategy
passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/google/redirect',
    passReqToCallback: true
  }, async (req, accessToken, refreshToken, profile, done) => {
    const email = profile.emails[0].value
    try {
      const user = await User.findOne({ email })

      if (!user) {
        // Parse the decoded state parameter into an object
        const stateObj = JSON.parse(req.query.state)
        if (!stateObj) {
          return done(new Error('User does not exist'), false)
        }

        // Access the userType property of the state object
        const userType = stateObj.userType

        if (!userType) {
          return done(new Error('Missing user type'), false)
        }
        const name = profile.displayName
        const newUser = await createUser(email, userType, name, profile)
        return done(null, newUser)
      }
      return done(null, user)
    } catch (err) {
      return done(err, false)
    }
  })
)

export default passport

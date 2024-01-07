import passport from 'passport'

const isAuthenticated = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err || !user) {
      passport.authenticate('google', { session: true }, (err, user) => {
        if (err || !user) {
          return res.status(401).json({ message: 'Unauthorized' })
        }
        req.user = user
        return next()
      })(req, res, next)
    }
    req.user = user
    return next()
  })(req, res, next)
}

export default isAuthenticated

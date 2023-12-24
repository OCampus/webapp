// create and send a token in a cookie
const sendToken = (user, statusCode, res) => {
  // create token
  const token = user.generateAuthToken()

  // cookie options
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRATION * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  }

  res.status(statusCode).cookie('token', token, options).json({
    success: true,
    token,
    user
  })
}

export default sendToken
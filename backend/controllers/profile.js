import User from '../models/user.js'
import asyncError from '../middlewares/asyncError.js'

// get user profile
export const getProfile = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id)
  res.status(200).json({ success: true, user })
})

// // update user profile
// export const updateProfile = asyncError(async (req, res, next) => {

// })

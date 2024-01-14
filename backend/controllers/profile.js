import User from '../models/user.js'
import ErrorHandler from '../utils/errorHandler.js'
import asyncError from '../middlewares/asyncError.js'

// get user profile
export const getProfile = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id)
  res.status(200).json({ success: true, user })
})

// get user profile by id
export const getUserById = asyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id)

  if (!user) return next(new ErrorHandler('User not found', 404))
  res.status(200).json({ success: true, user })
})

// update user profile
export const updateProfile = asyncError(async (req, res, next) => {
  if (req.user.id !== req.params.id) return next(new ErrorHandler('Not authorized', 401))
  const user = await User.findById(req.params.id)
  if (!user) return next(new ErrorHandler('User not found', 404))

  // common user data
  const { firstName, lastName, email } = req.body
  const commonUserData = {
    firstName: firstName || user.firstName,
    lastName: lastName || user.lastName,
    email: email || user.email
  }

  // student data only
  const { level, department, gender, institution } = req.body

  try {
    let updatedUser
    let data
    switch (user.userType) {
      case 'Landlord':
        updatedUser = await User.findByIdAndUpdate(req.params.id, commonUserData, {
          new: true,
          runValidators: true
        })
        res.status(200).json({ success: true, user: updatedUser })
        break
      case 'Student':
        data = {
          ...commonUserData,
          level: level || user.level,
          department: department || user.department,
          gender: gender || user.gender,
          institution: institution || user.institution
        }

        updatedUser = await User.findByIdAndUpdate(req.params.id, data, {
          new: true,
          runValidators: true
        })
        res.status(200).json({ success: true, user: updatedUser })
    }
  } catch (err) {
    return next(new ErrorHandler(err.message, 400))
  }
})

// // update user password
// export const updatePassword = asyncError(async (req, res, next) => {
//   const user = await User.findById(req.user._id)
// })

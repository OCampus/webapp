import Landlord from '../models/landlord.js'
import User from '../models/user.js'
import Student from '../models/student.js'
import asyncErrors from '../middlewares/asyncError.js'
import ErrorHandler from '../utils/errorHandler.js'
import sendToken from '../utils/sendToken.js'

export const signup = asyncErrors(async (req, res, next) => {
  const { email, password, userType, firstName, lastName } = req.body

  const commonUserData = {
    email,
    password,
    firstName,
    lastName,
    userType
  }

  try {
    let user
    if (userType === 'landlord') {
      user = new Landlord(commonUserData)
    } else if (userType === 'student') {
      const { level, department, gender, roommatePreferences, institution, religion } = req.body
      user = new Student({
        ...commonUserData,
        level,
        department,
        gender,
        roommatePreferences,
        institution,
        religion
      })
    }

    // Check if user already exists
    const oldUser = await user.constructor.findOne({ email })
    if (oldUser) {
      return next(new ErrorHandler(`${userType.capitalize()} already exists`, 400))
    }

    await user.save()
    sendToken(user, 201, res)
  } catch (error) {
    return next(new ErrorHandler(error.message, 400))
  }
})

export const login = asyncErrors(async (req, res, next) => {
  const { email, password } = req.body

  // check credentials
  if (!email || !password) {
    return next(new ErrorHandler('Input Email and Password', 400))
  }

  const user = await User.findOne({ email }).select('+password')
  if (!user) return next(new ErrorHandler('Invalid Email', 401))

  const isPasswordValid = await user.validatePassword(password)
  if (!isPasswordValid) return next(new ErrorHandler('Invalid Password', 401))

  // return auth token
  sendToken(user, 200, res)
})

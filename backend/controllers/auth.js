import Landlord from '../models/landlord.js'
import User from '../models/user.js'
import Student from '../models/student.js'
import asyncErrors from '../middlewares/asyncError.js'
import ErrorHandler from '../utils/errorHandler.js'
import sendToken from '../utils/sendToken.js'

// basic signup for landlord and students
export const signup = asyncErrors(async (req, res, next) => {
  const { email, password, firstName, lastName, userType } = req.body
  if (!userType) return next(new ErrorHandler('User type not specified', 400))

  const commonUserData = {
    email,
    password,
    firstName,
    lastName
  }

  try {
    let user
    if (userType === 'Landlord') {
      user = new Landlord(commonUserData)
    } else if (userType === 'Student') {
      const { level, department, gender, institution } = req.body
      user = new Student({
        ...commonUserData,
        level,
        department,
        gender,
        institution
      })
    }

    // Check if user already exists
    const oldUser = await user.constructor.findOne({ email })
    if (oldUser) {
      return next(new ErrorHandler(`${userType.capitalize()} already exists`, 400))
    }

    user.isLoggedIn = true
    await user.save()
    sendToken(user, 201, res)
  } catch (error) {
    return next()
  }
})

// basic login for both users
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

  // check if user is already logged in
  // if (user.isLoggedIn === true) return next(new ErrorHandler('User already logged in', 401))

  // return auth token
  sendToken(user, 200, res)
})

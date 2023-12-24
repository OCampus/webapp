import Landlord from '../models/landlord.js'
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

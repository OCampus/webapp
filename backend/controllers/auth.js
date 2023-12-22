import Landlord from '../models/landlord.js'
import asyncErrors from '../middlewares/asyncError.js'
import ErrorHandler from '../utils/errorHandler.js'
import sendToken from '../utils/sendToken.js'

export const signup = asyncErrors(async (req, res, next) => {
  const { email, password, userType, firstName, lastName } = req.body

  if (userType === 'landlord') {
    const landlord = new Landlord({
      email, password, userType, firstName, lastName
    })
    try {
      // check if landlord already exists
      const oldLandlord = await Landlord.findOne({ email })
      if (oldLandlord) {
        return next(new ErrorHandler('Landlord already exists', 400))
      }
      await landlord.save()

      sendToken(landlord, 201, res)
    } catch (error) {
      return next(new ErrorHandler(error.message, 400))
    }
  }
})

import Review from '../models/review.js'
import ErrorHandler from '../utils/errorHandler.js'
import asyncError from '../middlewares/asyncError.js'

// Create new review
export const createReview = asyncError(async (req, res, next) => {
  const { propertyId, rating, comment } = req.body
  const review = new Review({
    userId: req.user.id,
    propertyId,
    rating,
    comment
  })
  if (!review) return next(new ErrorHandler('Review not created', 400))
  await review.save()
  res.status(201).json({ success: true, review })
})

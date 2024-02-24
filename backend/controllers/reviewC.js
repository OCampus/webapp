import Review from '../models/review.js'
import ErrorHandler from '../utils/errorHandler.js'
import asyncError from '../middlewares/asyncError.js'
import mongoose from 'mongoose'

// Create new review
export const createReview = asyncError(async (req, res, next) => {
  const { property, rating, comment } = req.body
  const review = new Review({
    user: req.user.id,
    property,
    rating,
    comment
  })
  if (!review) return next(new ErrorHandler('Review not created', 400))
  await review.save()
  res.status(201).json({ success: true, review })
})

// Get all reviews
export const getReviews = asyncError(async (req, res, next) => {
  const reviews = await Review.find().populate({
    path: 'user',
    select: 'firstName lastName'
  }, {
    path: 'property',
    select: 'name'
  })
  if (!reviews) return next(new ErrorHandler('No reviews found', 404))
  res.status(200).json({ success: true, reviews })
})

// Get review by id
export const getReviewById = asyncError(async (req, res, next) => {
  const review = await Review.findById(req.params.id).populate({
    path: 'user',
    select: 'firstName lastName'
  }, {
    path: 'property',
    select: 'name'
  })
  if (!review) return next(new ErrorHandler('Review not found', 404))
  res.status(200).json({ success: true, review })
})

// Update review
export const updateReview = asyncError(async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) return next(new ErrorHandler('Invalid review id', 400))

  const review = await Review.findOneAndUpdate({
    _id: req.params.id,
    user: req.user.id
  }, req.body, {
    new: true,
    runValidators: true
  })
  if (!review) return next(new ErrorHandler('Review not updated or not authorized', 400))
  res.status(200).json({ success: true, review })
})

// Delete review
export const deleteReview = asyncError(async (req, res, next) => {
  const review = await Review.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id
  })
  if (!review) return next(new ErrorHandler('Review not deleted or not authorized', 400))
  res.status(200).json({ success: true, message: 'Review deleted' })
})

// Get all reviews for a property
export const getPropertyReviews = asyncError(async (req, res, next) => {
  if (!req.query.propertyId) return next(new ErrorHandler('Property id is required', 400))
  if (!mongoose.Types.ObjectId.isValid(req.query.propertyId)) return next(new ErrorHandler('Invalid property id', 400))

  const reviews = await Review.find({ property: req.query.propertyId }).populate({
    path: 'user',
    select: 'firstName lastName'
  })
  if (!reviews || reviews.length === 0) return next(new ErrorHandler('No reviews found', 404))
  res.status(200).json({ success: true, reviews })
})

// Get all reviews for a user
export const getUserReviews = asyncError(async (req, res, next) => {
  if (!req.query.userId) return next(new ErrorHandler('User id is required', 400))
  if (!mongoose.Types.ObjectId.isValid(req.query.userId)) return next(new ErrorHandler('Invalid user id', 400))

  const reviews = await Review.find({ user: req.query.userId }).populate({
    path: 'property',
    select: 'name'
  })
  if (!reviews || reviews.length === 0) return next(new ErrorHandler('No reviews found', 404))
  res.status(200).json({ success: true, reviews })
})

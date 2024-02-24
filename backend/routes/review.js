import express from 'express'
import isAuthenticated from '../middlewares/checkAuth.js'
import { createReview, getReviews, getReviewById, updateReview, deleteReview, getPropertyReviews, getUserReviews } from '../controllers/reviewC.js'

const router = express.Router()

// Create new review
router.post('/review/new', isAuthenticated, createReview)

// Get all reviews
router.get('/review/all', getReviews)

// Get review by id
router.get('/review/:id', getReviewById)

// Update review
router.put('/review/:id', isAuthenticated, updateReview)

// Delete review
router.delete('/review/:id', isAuthenticated, deleteReview)

// Get all reviews for a property
router.get('/property/:id/reviews', getPropertyReviews)

// Get all reviews for a user
router.get('/user/:id/reviews', getUserReviews)

export default router

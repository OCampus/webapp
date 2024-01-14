import express from 'express'
import isAuthenticated from '../middlewares/checkAuth.js'
import { getProfile, getUserById, updateProfile } from '../controllers/profile.js'

const router = express.Router()

// currently logged in user
router.get('/user/me', isAuthenticated, getProfile)

// get user by id
router.get('/user/:id', isAuthenticated, getUserById)

// update user profile
router.put('/user/:id', isAuthenticated, updateProfile)

export default router

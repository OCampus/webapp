import express from 'express'
import isAuthenticated from '../middlewares/checkAuth.js'
import { getProfile, getUserById, updateProfile, updatePassword, deleteAccount } from '../controllers/profile.js'

const router = express.Router()

// currently logged in user
router.get('/user/me', isAuthenticated, getProfile)

// get user by id
router.get('/user/:id', isAuthenticated, getUserById)

// update user profile
router.put('/user/:id', isAuthenticated, updateProfile)

// delete user account
router.delete('/user/:id', isAuthenticated, deleteAccount)

// update user password
router.put('/user/password/update', isAuthenticated, updatePassword)

export default router

import express from 'express'
import isAuthenticated from '../middlewares/checkAuth.js'
import { getProfile } from '../controllers/profile.js'

const router = express.Router()

router.get('/me', isAuthenticated, getProfile)

export default router

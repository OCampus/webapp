import express from 'express'
import { signup } from '../controllers/auth.js'

const router = express.Router()

// signup for landlord
router.post('/signup', signup)

export default router

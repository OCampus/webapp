import express from 'express'
import { signup, login } from '../controllers/auth.js'

const router = express.Router()

// signup for landlord and student
router.post('/signup', signup)
router.post('/login', login)

export default router

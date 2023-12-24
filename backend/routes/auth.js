import express from 'express'
import { signup } from '../controllers/auth.js'

const router = express.Router()

// signup for landlord and student
router.post('/signup', signup)

export default router

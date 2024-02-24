import express from 'express'
import isAuthenticated from '../middlewares/checkAuth.js'
import { createProperty, deleteProperty, getPropertyById, updateProperty, getAllProperties, getPropertiesByLandlord, propertySearch } from '../controllers/propertyC.js'

const router = express.Router()

// Create Property
router.post('/property/create', isAuthenticated, createProperty)

// Get Property by id
router.get('/property/:id', getPropertyById)

// Update Property
router.put('/property/:id', isAuthenticated, updateProperty)

// Delete Property
router.delete('/property/:id', isAuthenticated, deleteProperty)

// List all properties
router.get('/property/all', getAllProperties)

// Get Properties owned by a Landlord
router.get('/property/landlord', isAuthenticated, getPropertiesByLandlord)

// Property search
router.get('/property/search', propertySearch)

export default router

import Property from '../models/property.js'
import ErrorHandler from '../utils/errorHandler.js'
import asyncError from '../middlewares/asyncError.js'
import User from '../models/user.js'

// Create new property
export const createProperty = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user.id)
  if (!user) return next(new ErrorHandler('User not found', 404))

  try {
    const data = {
      ...req.body,
      landlord: req.user.id
    }
    const property = await Property.create(data)
    if (!property) return next(new ErrorHandler('Property not created', 400))
    res.status(201).json({ success: true, property })
  } catch (error) {
    next(new ErrorHandler(error.message, 400))
  }
})

// Get Property by id
export const getPropertyById = asyncError(async (req, res, next) => {
  const property = await Property.findById(req.params.id)
  if (!property) return next(new ErrorHandler('Property not found', 404))
  res.status(200).json({ success: true, property })
})

// Update Property
export const updateProperty = asyncError(async (req, res, next) => {
  // find property by id and landlord
  const property = await Property.findOne({
    _id: req.params.id,
    landlord: req.user.id
  })
  if (!property) return next(new ErrorHandler('Property not found or not authorized', 404))

  // Remove the _id field if it exists in the request body
  if (req.body._id) {
    delete req.body._id
  }

  const updatedProperty = await Property.findOneAndUpdate({
    _id: req.params.id
  }, req.body, {
    new: true,
    runValidators: true
  })

  if (!updatedProperty) return next(new ErrorHandler('Property not updated', 400))
  res.status(200).json({ success: true, property: updatedProperty })
})

// Delete Property
export const deleteProperty = asyncError(async (req, res, next) => {
  const deletedProperty = await Property.findOneAndDelete({
    _id: req.params.id,
    landlord: req.user.id
  })

  if (!deletedProperty) return next(new ErrorHandler('Property not found or not authorized', 404))
  res.status(200).json({ success: true, message: 'Property deleted successfully' })
})

// Get all properties | Property Listing
export const getAllProperties = asyncError(async (req, res, next) => {
  const properties = await Property.find()
  if (!properties) return next(new ErrorHandler('Properties not found', 404))
  res.status(200).json({ success: true, properties })
})

// Get all properties by landlord
export const getPropertiesByLandlord = asyncError(async (req, res, next) => {
  const properties = await Property.find({ landlord: req.user.id })
  if (!properties) return next(new ErrorHandler('Properties not found', 404))
  res.status(200).json({ success: true, properties })
})

// Property search
export const propertySearch = asyncError(async (req, res, next) => {
  const { location, roomType, minPrice, maxPrice, amenities } = req.query
  const filter = {}

  if (location) {
    filter.address = {
      $regex: location,
      $options: 'i'
    }
  }

  if (roomType) {
    filter.roomType = roomType
  }

  if (amenities) {
    filter.amenities = {
      $in: amenities.split(',')
    }
  }
  if (minPrice || maxPrice) {
    filter.price = {
      $gte: minPrice,
      $lte: maxPrice
    }
  }
  const properties = await Property.find(filter)
  if (!properties) return next(new ErrorHandler('Properties not found', 404))
  res.status(200).json({ success: true, properties })
})

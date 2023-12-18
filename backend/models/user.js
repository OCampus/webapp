/**
 * @file User model schema definition.
 * @module models/user
 */

import mongoose from 'mongoose'

/**
 * User schema definition.
 * @typedef {Object} UserSchema
 * @property {string} email - The user's email address.
 * @property {string} password - The user's password.
 * @property {string} userType - The user's type, either 'landlord' or 'student'.
 */

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    enum: ['landlord', 'student'],
    required: true
  }
})

const User = mongoose.model('User', userSchema)
export default User

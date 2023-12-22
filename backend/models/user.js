/**
 * @file User model schema definition.
 * @module models/user
 */

import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

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
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
},
{
  timestamps: true
}
)

userSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('password')) {
    // Hash the password before saving the user model
    user.password = await bcrypt.hash(user.password, 8)
  }
  next()
})

// validates inserted password against hashed password
userSchema.methods.validatePassword = async function (insertedPassword) {
  return await bcrypt.compare(insertedPassword, this.password)
}

userSchema.methods.generateAuthToken = function () {
  // Generate an auth token for the user
  const user = this
  const token = jwt.sign({ _id: user._id, userType: user.userType }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })
  return token
}

const User = mongoose.model('User', userSchema)
export default User

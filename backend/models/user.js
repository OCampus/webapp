import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

/**
 * User schema definition.
 */

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String, // hashed password
    select: false
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  loginHistory: [{
    timestamps: {
      type: Date,
      default: Date.now
    }
  }],
  googleId: String,
  isLoggedIn: Boolean
},
{
  discriminatorKey: 'userType',
  timestamps: true
}
)

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    // Hash the password before saving the user model
    this.password = await bcrypt.hash(this.password, 8)
  }
  next()
})

// validates inserted password against hashed password
userSchema.methods.validatePassword = async function (insertedPassword) {
  return await bcrypt.compare(insertedPassword, this.password)
}

userSchema.methods.generateAuthToken = function () {
  // Generate an auth token for the user
  const payload = { sub: this._id, userType: this.userType }
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })
  return token
}

const User = mongoose.model('User', userSchema)
export default User

/**
 * @fileoverview Defines the Landlord model.
 * @module models/landlord
 */

import mongoose from 'mongoose'
import User from './user.js'

/**
 * Represents a Landlord.
 * @class
 * @extends User
 */
const landlordSchema = new mongoose.Schema({
  properties: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property'
  }]
})

const Landlord = User.discriminator('Landlord', landlordSchema)
export default Landlord

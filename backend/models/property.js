import mongoose from 'mongoose'

const propertySchema = new mongoose.Schema({
  landlord: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  images: {
    type: [String],
    required: true
  },
  roomType: {
    type: String,
    required: true
  },
  amenities: {
    type: [String],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  distance: {
    type: Number, // should be in mins
    required: true
  },
  rules: {
    type: [String]
  }
}, {
  timestamps: true
})

const Property = mongoose.model('Property', propertySchema)
export default Property

import mongoose from 'mongoose'

// Roommate Schema to handle one-one relationship between students

const roommateSchema = new mongoose.Schema({
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
    },
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
    }
  ]
})

const Roommate = mongoose.model('Roommate', roommateSchema)
export default Roommate
// might be updated to handle 3 roommmates

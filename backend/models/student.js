import mongoose from 'mongoose'
import User from './user.js'

/**
 * Represents a student in the system.
 * @typedef {import('mongoose').Document} Student
 * @property {string} level - The level of the student (e.g. '100', '200', etc.).
 * @property {string} department - The department of the student.
 * @property {string} gender - The gender of the student ('male' or 'female').
 * @property {string} [roommatePreference] - The roommate preference of the student.
 * @property {mongoose.Schema.Types.ObjectId} [roommate] - The ID of the student's roommate.
 */

const studentSchema = new mongoose.Schema({
  level: {
    type: String,
    enum: ['100', '200', '300', '400', '500', '600']
  },
  department: {
    type: String
  },
  gender: {
    type: String
  },
  roommate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  },
  institution: {
    type: String
  }
})

const Student = User.discriminator('Student', studentSchema)
export default Student

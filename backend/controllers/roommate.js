// import Student from '../models/student.js'
// import asyncErrors from '../middlewares/asyncError.js'
// import ErrorHandler from '../utils/errorHandler.js'
// import Roommate from '../models/roommate.js'

// // create a new roommate
// export const createRoommate = asyncErrors(async (req, res, next) => {
//   const { student1, student2 } = req.body
//   if (!student1 || !student2) {
//     return next(new ErrorHandler('Please provide both students', 400))
//   }

//   const student1Exists = await Student.findById(student1)
//   const student2Exists = await Student.findById(student2)
//   if (!student1Exists || !student2Exists) {
//     return next(new ErrorHandler('One or both students do not exist', 404))
//   }

//   const roommateExists = await Roommate.findOne({
//     students: {
//       $all: [student1, student2]
//     }
//   })
//   if (roommateExists) {
//     return next(new ErrorHandler('Roommate already exists', 400))
//   }

//   const roommate = await Roommate.create({
//     students: [student1, student2]
//   })

//   res.status(201).json({
//     success: true,
//     message: 'Roommate created successfully',
//     data: roommate
//   })
// })

// // delete a roommate
// export const deleteRoommate = asyncErrors(async (req, res, next) => {
//   const { id } = req.params
//   const roommate = await Roommate.findById(id)
//   if (!roommate) {
//     return next(new ErrorHandler('Roommate does not exist', 404))
//   }

//   await roommate.remove()
//   res.status(200).json({
//     success: true,
//     message: 'Roommate deleted successfully'
//   })
// })

// // get roommate by id
// export const getRoommateById = asyncErrors(async (req, res, next) => {
//   const { id } = req.params
//   const roommate = await Roommate.findById(id).populate('students')
//   if (!roommate) {
//     return next(new ErrorHandler('Roommate does not exist', 404))
//   }

//   res.status(200).json({
//     success: true,
//     data: roommate
//   })
// })

// coming back to this

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema({
  client: String,
  date: Date,
  duration: Number,
  booked_on: Date
})

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment
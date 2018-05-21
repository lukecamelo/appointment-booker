const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema({
  client: String,
  date: String,
  duration: Number,
  booked_on: String
})

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema({
  client: String,
  date: Date,
  length: Number,
  booked_at: Date
})

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment
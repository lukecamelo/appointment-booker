const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema({
  client: String,
  date: String,
  startTime: Date,
  endTime: Date
})

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment
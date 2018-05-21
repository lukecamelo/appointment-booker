const express = require('express')
const router = express.Router()

const appointmentController = require('./controllers/appointment.controller')

router.route('/realdata', appointmentController.getAppointments)
  .get(appointmentController.getAppointments)
  .post(appointmentController.newAppointment)
  
module.exports = router
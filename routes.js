const express = require('express')
const router = express.Router()

const appointmentController = require('./controllers/appointment.controller')

router.route('/realdata')
  .get(appointmentController.getAppointments)
  .post(appointmentController.newAppointment)

router.route('/:id')
  .get(appointmentController.getAppointment)
  .delete(appointmentController.deleteAppointment)

module.exports = router
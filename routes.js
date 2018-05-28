const express = require('express')
const router = express.Router()

const appointmentController = require('./controllers/appointment.controller')

router.route('/realdata')
  .get(appointmentController.getAppointments)
  .post(appointmentController.newAppointment)

router.route('/realdata/delete')
  .post(appointmentController.deleteAppointment)

router.route('/realdata/update')
  .post(appointmentController.editAppointment)


module.exports = router
const express = require('express')
const router = express.Router()

const appointmentController = require('./controllers/appointment.controller')

router.route('/realdata')
  .get(appointmentController.getAppointments)
  .post(appointmentController.newAppointment)

<<<<<<< HEAD
router.route('/:id')
  .get(appointmentController.getAppointment)
  .delete(appointmentController.deleteAppointment)
=======
router.route('/realdata/hello')
  .post(appointmentController.deleteAppointment)
>>>>>>> 27d6f2c

module.exports = router
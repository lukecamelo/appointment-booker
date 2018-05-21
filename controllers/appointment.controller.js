const mongoose = require('mongoose')
const Appointment = require('../model/appointment')

module.exports = {
  getAppointments: getAppointments
}

function getAppointments(req, res) {
  Appointment.find().exec((err, appoint) => {
    if (err) {
      return res.json({'success': false, 'message': 'there was an error.'})
    }

    return res.json({'success': true, 'message': 'Appointments fetched successfully.', appoint})
  })
}
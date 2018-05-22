const mongoose = require('mongoose')
const Appointment = require('../model/appointment')

module.exports = {
  getAppointments: getAppointments,
  newAppointment: newAppointment,
  deleteAppointment: deleteAppointment
}

function getAppointments(req, res) {
  Appointment.find().exec((err, appoint) => {
    if (err) {
      return res.json({'success': false, 'message': 'there was an error.'})
    }

    return res.json({'success': true, 'message': 'Appointments fetched successfully.', appoint})
  })
}

function newAppointment(req, res) {
  const appointment = new Appointment({
    client: req.body.client,
    date: "1/00/2018",
    duration: req.body.duration,
    booked_on: "12/31/2017"
  })

  appointment.save((err) => {
    if(err)
    throw err
  })
  res.redirect('/')
}

function deleteAppointment(req, res) {
  console.log(JSON.stringify(req, null, 2))
}
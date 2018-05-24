const mongoose = require('mongoose')
const Appointment = require('../model/appointment')
const moment = require('moment')

module.exports = {
  getAppointments: getAppointments,
  newAppointment: newAppointment,
  deleteAppointment: deleteAppointment,
  editAppointment: editAppointment
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
  
  const tempDate = moment()

  const appointment = new Appointment({
    client: req.body.client,
    date: req.body.date,
    duration: req.body.duration,
    booked_on: tempDate
  })

  appointment.save((err) => {
    if(err)
    throw err
  })

  res.redirect('/')
}

function deleteAppointment(req, res) {
  Appointment.deleteOne({_id: req.body.id}, (err) => {
    if (err)
      throw err
  })
  res.redirect('/')
}

function editAppointment(req, res) {
  const tempDate = moment()
  Appointment.findOne({_id: req.body.id}, (err, appoint) => {
    appoint.client = req.body.client
    appoint.date = req.body.date
    appoint.duration = req.body.duration
    appoint.booked_on = tempDate

    appoint.save((err) => {
      if (err)
        throw err
    })
  })
}
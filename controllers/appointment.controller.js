const mongoose = require('mongoose')
const Appointment = require('../model/appointment')

module.exports = {
  getAppointments: getAppointments,
  newAppointment: newAppointment,
  getAppointment: getAppointment,
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

function getAppointment(req, res) {
  Appointment.find({_id: req.params.id}).exec((err, appoint) => {
    if(err) {
      return res.json({'success':false, 'message':'Some Error'})
    }
    if(appoint.length) {
      return res.json({'success': true, 'message': 'Found appointment by id', appoint})
    }
  }) 
}

function deleteAppointment(req, res) {
  Appointment.findByIdAndRemove(req.params.id, (err, appoint) => {
    if(err) {
      return res.json({'success': false,'message': 'Could not delete'})
    }
    return res.json({'success': true, 'message': 'Appointment removed.'})
  })
}
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

    return res.json({'success': true, 'message': 'Nuffin\' here cap.', appoint})
  })
}

function newAppointment(req, res) {
  
  const tempDate = moment().format('HH:mm a')
  const formattedDate = moment(req.body.client, 'yyyy-MM-dd')

  const appointment = new Appointment({
    client: req.body.client,
    date: req.body.date,
    startTime: req.body.startTime,
    endTime: req.body.endTime
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
    appoint.startTime = req.body.startTime
    appoint.endTime = req.body.endTime

    appoint.save((err) => {
      if (err)
        throw err
    })
  })
  res.redirect('/api')
}
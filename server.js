const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const dummy_appointment = require('./model/dummydata')

const appointmentController = require('./controllers/appointment.controller')

const app = express()
const routes = require('./routes')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 8080

mongoose.connect('mongodb://lukecamelo:password@ds117509.mlab.com:17509/appointment_db')

app.use('/api', routes)

app.get('/api/appointments', (req, res) => {
  res.send({express: dummy_appointment})
})

app.listen(port, () => console.log(`listening on port ${port}`))
const express = require('express')
const mongoose = require('mongoose')
const dummy_appointment = require('./model/dummydata')

const app = express()
const port = process.env.PORT || 8080

mongoose.connect('mongodb://lukecamelo:password@ds117509.mlab.com:17509/appointment_db')

app.get('/api/appointments', (req, res) => {
  res.send({express: dummy_appointment})
})

app.listen(port, () => console.log(`listening on port ${port}`))
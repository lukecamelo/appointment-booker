const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 8080

mongoose.connect('mongodb://lukecamelo:password@ds117509.mlab.com:17509/appointment_db')

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hey from express'})
})

app.listen(port, () => console.log(`listening on port ${port}`))
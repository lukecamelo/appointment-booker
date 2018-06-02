const express = require('express')
const mongoose = require('mongoose')
const app = express()
const User = require('./model/users')
const appointmentController = require('./controllers/appointment.controller')
const userController = require('./controllers/user.controller')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080
const db = mongoose.connection
const routes = require('./routes')
const bcrypt = require('bcrypt-nodejs')

const passport = require('passport')
const Strategy = require('passport-local').Strategy

passport.use('local-login', new Strategy(
  function(username, password, cb) {
    User.findOne({ username: username }, (err, user) => {

      if (err) { return cb(err) }

      if (!user) {
        
        console.log('invalid user/pass')
        return cb(null, false)
      }

      if (!user.validPassword(password) && user.password != password) { return cb(null, false) }

      console.log('success!')
      return cb(null, user)
    })
  }
))

passport.use('local-signup', new Strategy(
  function(username, password, done) {
    User.findOne({ username: username}, (err, user) => {
      if (err)
        return done(err)

      if (user) {
        return done(null, false)
      } else {

        const newUser = new User()

        newUser.username = username
        newUser.password = newUser.generateHash(password)

        newUser.save((err) => {
          if (err)
            throw err

          return done(null, newUser)
        })
      }

    })
  }
))

passport.serializeUser((user, cb) => {
  cb(null, user.id)
})

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) { return cb(err) }
    cb(null, user)
  })
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('morgan')('combined'))
app.use(require('cookie-parser')())
app.use('/api', routes)
app.use(require('express-session')({ secret: 'express secret', resave: false, saveUninitialized: false }))

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://lukecamelo:password@ds117509.mlab.com:17509/appointment_db', {
  reconnectInterval: 1000
})

db.on('error', console.error.bind(console, 'connection error:'))

app.get('/login', (req, res) => {
  if (req.user) {
    return res.json({user: req.user})
  }
  else {
    return res.json({user: 'nobody logged in.'})
  }
  res.redirect('/')
})

app.post('/login', 
  passport.authenticate('local-login', { failureRedirect: '/login' }),
  function(req, res) {
    // console.log(req.session)
    res.redirect('/')
})

app.post('/signup', 
  passport.authenticate('local-signup', { failureRedirect: '/signup'}),
  function(req, res) {
    res.redirect('/')
})

app.get('/logout', (req, res) => {
  req.logOut()
  req.user = null
  res.redirect('/')
})

app.listen(port, () => console.log(`listening on port ${port}`))
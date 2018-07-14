const mongoose = require('mongoose')
const User = require('../model/users')

module.exports = {
  getUser: getUser,
  userLogin: userLogin
}

function getUser(req, res) {
  if (req.user) {
    return res.json({ user: req.user })
  } else {
    return res.json({ user: 'nobody logged in.' })
  }
  res.redirect('/')
}

function userLogin(req, res) {
  passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      // console.log(req.session)
      res.redirect('/')
    }
}

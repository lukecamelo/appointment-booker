const moment = require('moment')

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

const appointments = [
  {
    client: "Luke Camelo",
    date: "6/12/2018",
    duration: 45,
    booked_on: "5/20/2018"
  },
  {
    client: "Shawn Mars",
    date: "5/16/2018",
    duration: 30,
    booked_on: "5/10/2018"
  },
  {
    client: "Leonardo DiCaprio",
    date: "5/8/2018",
    duration: 60,
    booked_on: "4/29/2018"
  }
] 

module.exports = appointments
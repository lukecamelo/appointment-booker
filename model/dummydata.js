let today = new Date()
let tomorrow = new Date()
let dd = today.getDate()
let dd2 = today.getDate()+5
let mm = today.getMonth()+1 //January is 0!
let yyyy = today.getFullYear()

today = mm + '/' + dd + '/' + yyyy
tomorrow = mm + '/' + dd2 + '/' + yyyy

const appointments = [
  {
    client: "Luke Camelo",
    date: tomorrow,
    duration: 45,
    booked_on: today
  },
  {
    client: "Shawn Mars",
    date: tomorrow,
    duration: 30,
    booked_on: today
  },
  {
    client: "Leonardo DiCaprio",
    date: tomorrow,
    duration: 60,
    booked_on: today
  }
] 

module.exports = appointments
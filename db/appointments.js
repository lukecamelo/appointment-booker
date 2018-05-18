const Appointment = require('./appointment')

let today = new Date();
let tomorrow = new Date()
let dd = today.getDate();
let dd2 = today.getDate()+5
let mm = today.getMonth()+1; //January is 0!
let yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
tomorrow = mm + '/' + dd2 + '/' + yyyy

const newApp = new Appointment({
  client: 'luke camelo',
  date: tomorrow,
  length: 45,
  booked_at: today
})
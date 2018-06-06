// import React from 'react'

export const callApi = async () => {
  const response = await fetch('/api/realdata')
  const body = await response.json()

  if (response.status !== 200) throw Error(body.message)

  return body
}

// export const callLogin = async () => {
//   const response = await fetch('/login', {
//     method: 'POST',
//     headers: { 'Accept': 'application/json', 'Content-type': 'application/json'}
//   })
//   const body = await response.json()

//   if (response.status !== 200) throw Error(body.message)

//   return body
// }

// TODO figure out how to get this to update state in App.js
export const deleteAppointment = (appointment_id) => {
    fetch('/api/realdata/delete', {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: appointment_id })
  })
  .then((res) => {
    const appointments = this.state.appointments.filter(appointment => appointment._id !== appointment_id)
    this.setState({ appointments, response: res.status })
    console.log(this.state.response)
  })
}

export const updateAppointment = (id, client, date, startTime, endTime) => {
    const parsedStart = new Date(date + ', ' + startTime + ':00')
    const parsedEnd = new Date(date + ', ' + endTime + ':00')
    fetch ('/api/realdata/update', {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, client, date, startTime: parsedStart, endTime: parsedEnd })
  })
  .then((res) => {
    // const appointments = this.state.appointments.filter(appointment => appointment._id !== id)
    this.setState({response: res.status})
  })
}

export const addAppointment = (client, date, endTime, startTime) => {
  const parsedStart = new Date(date + ', ' + startTime + ':00')
  const parsedEnd = new Date(date + ', ' + endTime + ':00')
  fetch('/api/realdata', {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ client, date, startTime: parsedStart, endTime: parsedEnd })
  })
  .then(() => console.log('all good')).catch(err => console.log(err))
}

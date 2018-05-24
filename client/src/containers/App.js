import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'bulma/css/bulma.css'
import './App.css';

import List from './List'
// import AppointmentForm from '../components/AppointmentForm'

class App extends Component {
  state = {
    success: false,
    message: '',
    appointments: [],
    response: 'N/A'
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({
        success: res.success,
        message: res.message,
        appointments: res.appoint
      }))
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/realdata')
    const body = await response.json()

    if (response.status !== 200) throw Error(body.message)

    return body
  }

  deleteAppointment = (appointment_id) => {
      fetch('/api/realdata/delete', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({id: appointment_id})
    })
    .then((res) => {
      const appointments = this.state.appointments.filter(appointment => appointment._id !== appointment_id)
      this.setState({ appointments, response: res.status })
      console.log(this.state.response)
    })
  }

  updateAppointment = (id, client, date, duration) => {
      fetch ('/api/realdata/update', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({id, client, date, duration})
    })
    .then((res) => {
      // const appointments = this.state.appointments.filter(appointment => appointment._id !== id)
      this.setState({response: res.status})
    })
  }

  render() {

    const { success, message, appointments } = this.state

    if (success === true) {
      console.log(success, message, appointments)
    }

    return (
      <div className="App">
        {appointments.length > 0 ? 
        <List 
        response={appointments} 
        deleteAppointment={this.deleteAppointment} 
        update={this.updateAppointment}/> 
        : <h1 className='title'>{message}</h1>}
        <Link className='button is-primary' to='/form'>Create new Appointment</Link>
        <Link className='button is-info' to='/update'>Test</Link>
      </div>
    );
  
  }
}

export default App;

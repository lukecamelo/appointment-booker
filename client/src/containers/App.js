import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { callApi } from '../helpers/helpers'

import 'bulma/css/bulma.css'
import './App.css';

import List from './List'
// import AppointmentForm from '../components/AppointmentForm'

class App extends Component {
  state = {
    isLoggedIn: false,
    otherRes: '',
    success: false,
    message: 'nothing',
    appointments: [],
    response: 'N/A'
  }

  componentDidMount() {
    callApi()
      .then(res => this.setState({
        success: res.success,
        message: res.message,
        appointments: res.appoint
      }))
      .catch(err => console.log(err))

    this.checkLogin()
      .then(res => {
        console.log(res)
      })
  }

  checkLogin = async() => {
    const response = await fetch('/login', { credentials: 'same-origin' })   
    const body = response.json()
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

  render() {

    const { success, message, appointments } = this.state

    if (success === true) {
      console.log(success, message, appointments)
    }

    return (
      <div className="App">
        <h1 className="title">{this.state.otherRes}</h1>
        {appointments.length > 0 ? 

        <List 
        response={appointments} 
        deleteAppointment={this.deleteAppointment} /> 

        : <h1 className='title'>{message}</h1>}

        <Link className='button is-info' to='/form'>Create new Appointment</Link>
        <Link className='button is-info' to='/login'>Login page</Link>
        <button className='button is-primary' onClick={() => console.log(this.state.otherRes)}>test</button>
      </div>
    );
  
  }
}

export default App;

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
    user: '',
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
        this.setState({user: res.user.username})
      })
  }

  checkLogin = async () => {
    const response = await fetch('/login', { credentials: 'same-origin' })   
    const body = response.json()
    return body
  }

  logout = () => {
    fetch('/logout', {
      method: 'GET',
      credentials: 'same-origin'
    })
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

    const { success, message, appointments, user } = this.state

    if (success === true) {
      console.log(success, message, appointments)
    }

    if (user) {
      return (
        <div className="App">
          <h1 className="title">{this.state.user}</h1>
          {appointments.length > 0 ? 

          <List 
          response={appointments} 
          deleteAppointment={this.deleteAppointment} /> 

          : <h1 className='title'>{message}</h1>}

          <Link className='button is-info' to='/form'>Create new Appointment</Link>
          <button className='button is-danger' onClick={this.logout}>Logout</button>
        </div>
      )
    } else {
      return (
      <div className="App">
        <h1 className="title">Please log in.</h1>
        <Link className='button is-info' to='/login'>Login page</Link>
      </div>
      )
    }
  
  }
}

export default App;

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
        if(res.user.username) {
          this.setState({ user: res.user.username, isLoggedIn: true })
        }
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
    this.setState({ user: 'nobody logged in', isLoggedIn: false })
  }

  deleteAppointment = (appointment_id) => {
    fetch('/api/realdata/delete', {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({id: appointment_id})
    })
    .then((res) => {
      const appointments = this.state.appointments.filter(appointment => appointment._id !== appointment_id)
      this.setState({ appointments, response: res.status }, console.log(this.state.response))
    })
  }

  render() {

    const { success, message, appointments, user, isLoggedIn } = this.state

    if (success === true) {
      console.log(success, message, appointments)
    }

    if (isLoggedIn) {
      return (
        <div className="App container">
          <div className="card appointment-table">
            <div className="card-content">
              <h1 className="title">{user}</h1>
              {appointments.length > 0 ? 

              <List 
              response={appointments} 
              deleteAppointment={this.deleteAppointment} /> 

              : <h1 className='title'>{message}</h1>}

              <Link className='button is-info' to='/form'>Create new Appointment</Link>
              <Link className='button is-danger' to='/' onClick={this.logout}>Logout</Link>
            </div>
          </div>
        </div>
      )
    } else {
      return (
      <div className="App container login-doink">
        <div className="card login-card">
          <div className="card-content">
            <h1 className="title">Please log in.</h1>
            <Link className='button is-info' to='/login'>Login page</Link>
          </div>
        </div>
      </div>
      )
    }
  
  }
}

export default App;

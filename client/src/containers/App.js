import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { callApi } from '../helpers/helpers'
import Fade from 'react-reveal/Fade'

import 'bulma/css/bulma.css'
import './App.css';

import List from './List'

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
      }).catch(err => console.log(err))
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

    const { appointments, user, isLoggedIn } = this.state

    if (isLoggedIn && appointments.length > 0) {
      return (
        <Fade top cascade>
          <div className="App container">
            <div className="card appointment-table">
              <div className="card-content">
                <Fade cascade>
                  <h1 className="title">Welcome, {user}!</h1>
                </Fade>
                {appointments.length > 0 ? 
                <Fade cascade>
                  <List 
                  response={appointments} 
                  deleteAppointment={this.deleteAppointment} /> 
                </Fade>
                : null}
                
                  <Link className='button is-info' to='/form'>Create new Appointment</Link>
                  <Link className='button is-danger' to='/' onClick={this.logout}>Logout</Link>
              </div>
            </div>
          </div>
        </Fade>
      )
    } else if (isLoggedIn) {
      return (
        <div className="container load-container">
          <div className="card">
            <div className="card-content">
              <Fade top cascade>
                <h1 className="title">Loading...</h1>
              </Fade>
            </div>
          </div>
        </div>
      )
    } else {
      return (
      <div className="App container login-doink">
        <div className="card login-card">
          <Fade cascade>
            <div className="card-content">
              <h1 className="title">Presenting my Appointment Booking app!</h1>
              <h2 className="subtitle">Please login to proceed to the application, or sign up if you do not have an account.</h2>
              <Link className='button is-info' to='/login'>Login page</Link>
              <Link className='button is-primary' to='/signup'>Signup page</Link>
            </div>
          </Fade>
        </div>
      </div>
      )
    }
  
  }
}

export default App;

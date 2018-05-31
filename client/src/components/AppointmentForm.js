import React, { Component } from 'react'
// import moment from 'moment';
import { Link } from 'react-router-dom'
import { addAppointment, callApi } from '../helpers/helpers'

import './AppointmentForm.css'

class AppointmentForm extends Component {

  state = {
    success: false,
    message: '',
    appointments: [],
    client: '',
    date: {},
    startTime: '',
    endTime: '',
    response: 0
  }

  componentDidMount() {
    callApi()
      .then(res => this.setState({
        success: res.success,
        message: res.message,
        appointments: res.appoint
      }))
      .catch(err => console.log(err))
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  isConflicting = () => {
    const { success, appointments, date, startTime, endTime } = this.state

    if (success === true) {
      
      let start = new Date(date + ', ' + startTime + ':00')
      let end = new Date(date + ', ' + endTime + ':00')
      let increment = 0

      for (let i = 0; i < appointments.length; i++) {

        const dbStart = new Date(appointments[i].startTime)
        const dbEnd = new Date(appointments[i].endTime)

        if ((start >= dbStart && start <= dbEnd) || (end >= dbStart && end <= dbEnd)) {
          console.log('conflict')
          increment++
        } else {
          console.log('we good')
        }
      }

      if (increment > 0) {
        return true
      } else {
        return false
      }

    }
  }

  render() {

    const { client, date, endTime, startTime, success, message, appointments } = this.state

    if(success === true) {
      console.log(success, message, appointments)
      console.log(this.isConflicting())
    }

    return (
      <div className="AppointmentForm container">
        <div className="card">
          <div className="card-content">

            <div className="field">
              <label className="label">Client</label>
              <div className="control">
                <input type="text" name='client' required placeholder='Jane Doe' value={client} onChange={this.changeHandler} className="input name-input"/>
              </div>
            </div>

            <div className="field">
              <label className="label">Date</label>
              <div className="control">
                <input type="date" required value={date} name='date' onChange={this.changeHandler} className="input date-input"/>
              </div>
            </div>

            <div className="field">
              <label className="label">Start Time</label>
              <div className="control">
                <input className='time-selector' type="time" value={startTime} name='startTime' onChange={this.changeHandler}/>
                <input className='time-selector' type="time" value={endTime} name='endTime' onChange={this.changeHandler}/>
              </div>
            </div>

            {!this.isConflicting() ?
            <Link to='/' className='button is-info' onClick={() => addAppointment(client, date, endTime, startTime)}>Add Appointment</Link>
            : <h1>Conflicting dates.</h1>}

            <Link className='button is-primary' to='/'>Back</Link>

          </div>
        </div>
      </div>
    )
  }
}

export default AppointmentForm
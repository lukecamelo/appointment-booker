import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { addAppointment } from '../helpers/helpers'

import './AppointmentForm.css'

class AppointmentForm extends Component {

  state = {
    client: '',
    duration: 30,
    date: {},
    booked_on: '',
    response: 0
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {

    let { client, date, duration, booked_on } = this.state

    return (
      <div className="AppointmentForm container">

        <div className="field">
          <label className="label is-one-quarter column">Client</label>
          <div className="control is-one-quarter column">
            <input type="text" name='client' required placeholder='Jane Doe' value={client} onChange={this.changeHandler} className="input name-input"/>
          </div>
        </div>

        {/* <div className="field">
          <label className="label is-one-quarter column">Duration</label>
          <div className="control is-one-quarter column">
            <div className="select">
              <select value={duration} name='duration' onChange={this.changeHandler} required>
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">1 hour</option>
              </select>
            </div>
          </div>
        </div> */}

        <div className="field">
          <label className="label is-one-quarter column">Date</label>
          <div className="control is-one-quarter column">
            <input type="date" required value={date} name='date' onChange={this.changeHandler} className="input date-input"/>
          </div>
        </div>

        <div className="field">
          <label className="label is-one-quarter column">Start Time</label>
          <div className="control is-one-quarter column">
            <input type="time" value={booked_on} name='booked_on' onChange={this.changeHandler}/>
            <input type="time" value={duration} name='duration' onChange={this.changeHandler}/>
          </div>
        </div>

        <Link to='/' className='button is-info' onClick={() => addAppointment(client, date, duration, booked_on)}>Add Appointment</Link>

        <Link className='button is-primary' to='/'>Back</Link>
      </div>
    )
  }
}

export default AppointmentForm
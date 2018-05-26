import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { addAppointment } from '../helpers/helpers'

import './AppointmentForm.css'

class AppointmentForm extends Component {

  state = {
    client: '',
    duration: 30,
    date: '',
    booked_on: '',
    response: 0
  }

  nameChangeHandler = (e) => {
    let client = {...this.state.client}
    client = e.target.value

    this.setState({client})
    console.log(this.state.client)
  }

  durationChangeHandler = (e) => {
    let duration = {...this.state.duration}
    duration = e.target.value

    this.setState({duration})
    console.log(this.state.duration)
  }

  dateChangeHandler = (e) => {
    let date = {...this.state.date}
    date = e.target.value

    this.setState({date})
    console.log(this.state.date)
  }

  bookedChangeHandler = (e) => {
    let booked_on = {...this.state.booked_on}
    booked_on = e.target.value

    this.setState({ booked_on })
    console.log(booked_on)
  }

  render() {

    let { client, date, duration, booked_on } = this.state

    return (
      <div className="AppointmentForm container">

        <div className="field">
          <label className="label is-one-quarter column">Client</label>
          <div className="control is-one-quarter column">
            <input type="text" required placeholder='Jane Doe' value={client} onChange={this.nameChangeHandler} className="input name-input"/>
          </div>
        </div>

        <div className="field">
          <label className="label is-one-quarter column">Duration</label>
          <div className="control is-one-quarter column">
            <div className="select">
              <select value={duration} onChange={this.durationChangeHandler} required>
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">1 hour</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label is-one-quarter column">Date</label>
          <div className="control is-one-quarter column">
            <input type="date" required value={date} onChange={this.dateChangeHandler} className="input date-input"/>
          </div>
        </div>

        <div className="field">
          <label className="label is-one-quarter column">Start Time</label>
          <div className="control is-one-quarter column">
            <input type="time" value={booked_on} onChange={this.bookedChangeHandler}/>
          </div>
        </div>

        <Link to='/' className='button is-info' onClick={() => addAppointment(client, date, duration, booked_on)}>Add Appointment</Link>

        <Link className='button is-primary' to='/'>Back</Link>
      </div>
    )
  }
}

export default AppointmentForm
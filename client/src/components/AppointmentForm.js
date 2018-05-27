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

    let startTimes = [], endTimes =[], dates = [], start = [], end = []
    const { success, appointments } = this.state

    if (success === true) {

      for(let i = 0; i < appointments.length; i++) {
        dates.push(appointments[i].date)
        startTimes.push(appointments[i].startTime)
        endTimes.push(appointments[i].endTime)
        start.push(new Date(dates[i] + ', ' + startTimes[i]))
        end.push(new Date(dates[i] + ', ' + endTimes[i]))
      }
      console.log(start, end)

    } else {
      console.log('hol up')
    }
  }

  render() {

    const { client, date, endTime, startTime, success, message, appointments } = this.state

    if(success === true) {
      console.log(success, message, appointments)
    }

    return (
      <div className="AppointmentForm container">

        <div className="field">
          <label className="label is-one-quarter column">Client</label>
          <div className="control is-one-quarter column">
            <input type="text" name='client' required placeholder='Jane Doe' value={client} onChange={this.changeHandler} className="input name-input"/>
          </div>
        </div>

        <div className="field">
          <label className="label is-one-quarter column">Date</label>
          <div className="control is-one-quarter column">
            <input type="date" required value={date} name='date' onChange={this.changeHandler} className="input date-input"/>
          </div>
        </div>

        <div className="field">
          <label className="label is-one-quarter column">Start Time</label>
          <div className="control is-one-quarter column">
            <input type="time" value={startTime} name='startTime' onChange={this.changeHandler}/>
            <input type="time" value={endTime} name='endTime' onChange={this.changeHandler}/>
          </div>
        </div>

        <Link to='/' className='button is-info' onClick={() => addAppointment(client, date, endTime, startTime)}>Add Appointment</Link>
        <button className="button is-primary" onClick={this.isConflicting}>Test</button>

        <Link className='button is-primary' to='/'>Back</Link>
      </div>
    )
  }
}

export default AppointmentForm
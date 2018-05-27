import React, { Component } from 'react'
// import moment from 'moment';
import { Link } from 'react-router-dom'
import { addAppointment, callApi } from '../helpers/helpers'

import './AppointmentForm.css'

class AppointmentForm extends Component {

  state = {
    appointments: [],
    client: '',
    duration: 30,
    date: {},
    booked_on: '',
    response: 0
  }

  componentDidMount() {
    callApi()
      .then((res) => {
        this.setState({
          appointments: res.appoint
        })
      })
      .catch(err => console.log(err))
    console.log(this.state.appointments)
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  isConflicting = () => {
    let time = new Date(this.state.date + ', ' + this.state.booked_on + ':00')
    console.log(time > new Date('5/25/2019'))
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
        <button className="button is-primary" onClick={this.isConflicting}>Test</button>

        <Link className='button is-primary' to='/'>Back</Link>
      </div>
    )
  }
}

export default AppointmentForm
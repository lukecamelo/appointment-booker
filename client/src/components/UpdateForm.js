import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { updateAppointment, callApi } from '../helpers/helpers'
import Fade from 'react-reveal/Fade'

import './UpdateForm.css'

class UpdateForm extends Component {
  state = {
    id: this.props.match.params.id,
    success: false,
    message: '',
    appointments: [],
    client: '',
    date: {},
    startTime: '',
    endTime: '',
    response: 0,
    hasBeenSet: false
  }

  componentDidMount() {
    callApi()
      .then(res =>
        this.setState({
          success: res.success,
          message: res.message,
          appointments: res.appoint
        })
      )
      .catch(err => console.log(err))
  }

  getEntry = async appointment_id => {
    const { appointments } = this.state
    const response = await fetch('/api/realdata')
    const body = await response.json()
    for (let i = 0; i < body.appoint.length; i++) {
      if (body.appoint[i]._id === appointment_id) {
        this.setState({
          client: appointments[i].client,
          date: appointments[i].date,
          startTime: appointments[i].startTime.toString(), // appointments[i].startTime.toString().split(' ')[4].slice(0, 5) + '',
          endTime: appointments[i].endTime.toString(), // appointments[i].endTime.toString().split(' ')[4].slice(0, 5) + '',
          hasBeenSet: true
        })
      }
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  isConflicting = () => {
    const {
      success,
      appointments,
      date,
      client,
      startTime,
      endTime
    } = this.state

    if (success === true) {
      let start = Date.parse(date + ', ' + startTime + ':00')
      let end = Date.parse(date + ', ' + endTime + ':00')
      let increment = 0

      for (let i = 0; i < appointments.length; i++) {
        const dbStart = new Date(appointments[i].startTime)
        const dbEnd = new Date(appointments[i].endTime)

        if (
          (start >= dbStart && start <= dbEnd) ||
          (end >= dbStart && end <= dbEnd)
        ) {
          increment++
        } else {
        }
      }

      if (increment > 0 || isNaN(start) || isNaN(end) || !client) {
        return true
      } else {
        return false
      }
    }
  }

  render() {
    let {
      id,
      client,
      date,
      startTime,
      endTime,
      success,
      hasBeenSet
    } = this.state

    if (success && !hasBeenSet) {
      this.getEntry(this.props.match.params.id)
    }

    if (hasBeenSet) {
      return (
        <div className="UpdateForm container">
          <Fade top>
            <div className="card">
              <Fade cascade>
                <div className="card-content">
                  <div className="field">
                    <label className="label">Client</label>
                    <div className="control">
                      <input
                        type="text"
                        name="client"
                        required
                        placeholder="Jane Doe"
                        value={client}
                        onChange={this.changeHandler}
                        className="input name-input"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Date</label>
                    <div className="control">
                      <input
                        type="date"
                        required
                        value={date}
                        name="date"
                        onChange={this.changeHandler}
                        className="input name-input"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Start Time</label>
                    <div className="control">
                      <input
                        type="time"
                        className="time-selector"
                        value={startTime}
                        name="startTime"
                        onChange={this.changeHandler}
                      />
                      <input
                        type="time"
                        className="time-selector"
                        value={endTime}
                        name="endTime"
                        onChange={this.changeHandler}
                      />
                    </div>
                  </div>

                  {!this.isConflicting() ? (
                    <Link
                      to="/"
                      className="button is-info"
                      onClick={() =>
                        updateAppointment(id, client, date, startTime, endTime)
                      }
                    >
                      Edit Appointment
                    </Link>
                  ) : (
                    <h1 className="title">Invalid appointment.</h1>
                  )}

                  <Link to="/" className="button is-primary">
                    Back
                  </Link>
                </div>
              </Fade>
            </div>
          </Fade>
        </div>
      )
    } else {
      return (
        <div className="container load-container">
          <div className="card">
            <div className="card-content">
              <h1 className="title">Loading...</h1>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default UpdateForm

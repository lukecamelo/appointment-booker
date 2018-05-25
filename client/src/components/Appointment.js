import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { deleteAppointment } from '../helpers/helpers'

class Appointment extends Component {

  render() {

    const { _id, client, date, duration, booked_on } = this.props.appointment
    const { index, deleteAppointment } = this.props


    return (
      <tr className='Appointment'>
        <th>{index}</th>
        <td>{client}</td>
        <td>{date}</td>
        <td>{duration} minutes</td>
        <td>{booked_on}</td>
        <td><a className='button is-danger' onClick={() => deleteAppointment(_id)}>Delete</a></td>
        <td><Link className='button is-primary' to={`/appointments/${_id}`}>Edit</Link></td>
      </tr>
    )
  }
}

export default Appointment
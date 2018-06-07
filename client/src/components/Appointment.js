import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Appointment extends Component {

  render() {

    const { _id, client, date, endTime, startTime } = this.props.appointment
    const { index, deleteAppointment } = this.props
    
    // take time from date object, convert it to string and make it pretty
    const start = new Date(startTime)
    const end = new Date(endTime)
    const parsedStart = start.toString().split(' ')[4].slice(0, 5) + ''
    const parsedEnd = end.toString().split(' ')[4].slice(0, 5) + ''

    return (
        <tr className='Appointment'>
          <th>{index}</th>
          <td>{client}</td>
          <td>{date}</td>
          <td>{parsedStart}</td>
          <td>{parsedEnd}</td>
          <td>
            <a className='button is-danger' onClick={() => deleteAppointment(_id)}>Delete</a>
            <Link className='button is-primary' to={`/appointments/${_id}`}>Edit</Link>
          </td>
        </tr>
    )
  }
}

export default Appointment
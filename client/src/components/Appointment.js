import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Appointment extends Component {

  render() {

    const { _id, client, date, endTime, startTime } = this.props.appointment
    const { index, deleteAppointment } = this.props
    
    // take time from date object and make it pretty
    const parsedStart = startTime.split(' ')[4].slice(0, 5)
    const parsedEnd = endTime.split(' ')[4].slice(0, 5)

    return (
        <tr className='Appointment'>
          <th>{index}</th>
          <td>{client}</td>
          <td>{date}</td>
          <td>{parsedStart}</td>
          <td>{parsedEnd}</td>
          <td><a className='button is-danger' onClick={() => deleteAppointment(_id)}>Delete</a></td>
          <td><Link className='button is-primary' to={`/appointments/${_id}`}>Edit</Link></td>
        </tr>
    )
  }
}

export default Appointment
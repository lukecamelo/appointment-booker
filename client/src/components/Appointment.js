import React, { Component } from 'react'

class Appointment extends Component {

  render() {

    const { _id, client, date, duration, booked_on } = this.props.appointment
    const { deleteAppointment } = this.props

    return (

      <tr className='Appointment'>
        <th>{this.props.id}</th>
        <td>{client}</td>
        <td>{date}</td>
        <td>{duration} minutes</td>
        <td>{booked_on}</td>
        <td><a className='button is-danger' onClick={() => deleteAppointment(_id)}>Delete</a></td>
      </tr>     

    )
  }
}

export default Appointment
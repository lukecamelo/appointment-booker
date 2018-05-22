import React, { Component } from 'react'

class Appointment extends Component {

    componentDidMount() {
      // this.deleteAppointment()
      console.log(this.props.appointment._id)
    }

    deleteAppointment = async () => {
      const consoleMessage = await fetch('/api/realdata/hello', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({id: this.props.appointment._id})
      })
    }

  render() {

    const { client, date, duration, booked_on } = this.props.appointment

    return (

      <tr className='Appointment'>
        <th>{this.props.id}</th>
        <td>{client}</td>
        <td>{date}</td>
        <td>{duration} minutes</td>
        <td>{booked_on}</td>
        <td><a className='button is-danger' onClick={this.deleteAppointment}>Delete</a></td>
      </tr>     

    )
  }
}

export default Appointment
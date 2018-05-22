import React, {Component} from 'react'

class Appointment extends Component {

    componentDidMount() {
      this.deleteAppointment()
    }

    deleteAppointment = async () => {
      const consoleMessage = await fetch('/api/realdata/hello', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
        // body: JSON.stringify({})
      })
      return consoleMessage
    }

  render() {
    return (  
      <tr className='Appointment'>
        <th>{this.props.ID}</th>
        <td>{this.props.client}</td>
        <td>{this.props.date}</td>
        <td>{this.props.duration} minutes</td>
        <td>{this.props.booked_on}</td>
      </tr>     
    )
  }
}

export default Appointment
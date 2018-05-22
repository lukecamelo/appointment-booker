import React, {Component} from 'react'

<<<<<<< HEAD
const Appointment = (props) => {
    let duration = props.duration
    return (  
      <tr className='Appointment'>
        <th>{props.ID}</th>
        <td>{props.client}</td>
        <td>{props.date}</td>
        <td>{props.duration} minutes</td>
        <td>{props.booked_on}</td>
        <td><a href='/:id' className='button is-danger'>Delete</a></td>
=======
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
>>>>>>> 27d6f2c
      </tr>     
    )
  }
}

export default Appointment
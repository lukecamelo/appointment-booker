import React from 'react'

class Appointment extends React.Component {

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
import React from 'react'

class Appointment extends React.Component {
  render() {
    return (
      <div>
        <h2>Client: {this.props.client}</h2>
        <h3>Date booked: {this.props.date}</h3>
        <h3>Duration booked: {this.props.length}</h3>
        <h3>Scheduled on: {this.props.booked_on}</h3>
      </div>
    )
  }
}

export default Appointment
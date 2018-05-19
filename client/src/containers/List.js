import React from 'react'
import Appointment from './Appointment'

class List extends React.Component {
  render() {

    let appointments

    if (this.props.response.length) {
      appointments = this.props.response.map((obj, i) => {
        return (
          <Appointment
          key={i} 
          client={obj.client}
          date={obj.date}
          duration={obj.duration}
          booked_on={obj.booked_on} />
        )
      })
    } 

    return (
      <div className="List">
        {appointments}
      </div>
    )
  }
}

export default List
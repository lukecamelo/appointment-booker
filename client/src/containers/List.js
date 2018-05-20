import React from 'react'
import Appointment from '../components/Appointment'

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

      appointments.sort((a, b) => {
        let partsA = a.props.date.split("/")
        let partsB = b.props.date.split("/")
        return new Date(partsA[2], partsA[1] - 1, partsA[0]) - new Date(partsB[2], partsB[1] - 1, partsB[0])
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
import React from 'react'
import Appointment from '../components/Appointment'

import './List.css'

class List extends React.Component {
  state = {
    sortBy: 'id'
  }

  handleSelect = (e) => {
    this.setState({sortBy: e.target.value})
    console.log(this.state.sortBy)
  }

  render() {

    let { sortBy } = this.state
    const { deleteAppointment, response, update } = this.props
    let appointments
    let times
    let parsedTimes

    if (response.length) {

      appointments = response.map((obj, i) => {
        return (
          <Appointment
          key={i}
          index={i}
          appointment={obj}
          deleteAppointment={deleteAppointment}
          update={update} />
        )
      })

      times = response.map((obj, i) => {
        return obj.booked_on
      })

      parsedTimes = times.map((time) => {
        return time.split(/[\s:]+/)
      })

      function timeCheck(times){
        let hours = []
        let minutes = []
        let amPm = []
        for(let i = 0; i < times.length; i++) {
          hours.push(times[i][0])
          minutes.push(times[i][1]) 
          amPm.push(times[i][2])
        }
        return [hours, minutes, amPm]
      }

      console.log(timeCheck(parsedTimes))

      if(sortBy === 'date') {

        // Doesn't work properly.
        
        // appointments.sort((a, b) => {
        //   let partsA = a.props.appointment.date.split("-")
        //   let partsB = b.props.appointment.date.split("-")
        //   return new Date(partsA[2], partsA[1] - 1, partsA[0]) - new Date(partsB[2], partsB[1] - 1, partsB[0])
        // })

      } else if (sortBy === 'id') {

        appointments.sort((a, b) => {
          return a.props.ID - b.props.ID
        })

      } else if (sortBy === 'duration') {

        appointments.sort((a, b) => {
          return a.props.appointment.duration - b.props.appointment.duration
        })
        
      }
    
    } 

    return (
      <div className="List container">
        <table className="table is-bordered is-striped is-hoverable has-text-centered appointments">
          <thead>
            <tr>
              <th>ID</th>
              <th>Client</th>
              <th>Date booked</th>
              <th>Start time</th>
              <th>End time</th>
            </tr>
          </thead>
          <tbody>
            {this.props.response.length ? appointments : null}
          </tbody>
        </table>

        <div className="select">
          <select onChange={this.handleSelect}>
            <option value="id">ID</option>
            <option value="date">Date</option>
            <option value="duration">Duration</option>
          </select>
        </div>
      
      </div>
    )
  }
}

export default List
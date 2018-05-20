import React from 'react'
import Appointment from '../components/Appointment'

class List extends React.Component {
  state = {
    sortBy: 'id'
  }

  changeSorting = () => {
    if (this.state.sortByDate === true) {
      this.setState({sortByDate: false})
    } else {
      this.setState({sortByDate: true})
    }
    console.log(this.state.sortByDate)
  }

  handleSelect = (e) => {
    this.setState({sortBy: e.target.value})
    console.log(this.state.sortBy)
  }

  render() {

    let { sortBy } = this.state
    let appointments

    if (this.props.response.length) {

      appointments = this.props.response.map((obj, i) => {
        return (
          <Appointment
          key={i}
          ID={i} 
          client={obj.client}
          date={obj.date}
          duration={obj.duration}
          booked_on={obj.booked_on} />
        )
      })

      if(sortBy === 'date') {
        appointments.sort((a, b) => {
          let partsA = a.props.date.split("/")
          let partsB = b.props.date.split("/")
          return new Date(partsA[2], partsA[1] - 1, partsA[0]) - new Date(partsB[2], partsB[1] - 1, partsB[0])
        })
      } else if (sortBy === 'id') {
        appointments.sort((a, b) => {
          return a.props.ID - b.props.ID
        })
      } else if (sortBy === 'duration') {
        appointments.sort((a, b) => {
          return a.props.duration - b.props.duration
        })
      }
    
    } 

    return (
      <div className="List container">
        <table className="table is-bordered is-striped is-hoverable has-text-centered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Client</th>
              <th>Date booked</th>
              <th>Duration booked</th>
              <th>Booked on</th>
            </tr>
          </thead>
          <tbody>
            {this.props.response.length ? appointments : null}
          </tbody>
        </table>

        <button 
        className='button is-primary'
        onClick={this.changeSorting}>Change sorting!</button>

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
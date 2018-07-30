import React from 'react'
import Appointment from '../components/Appointment'

import './List.css'

class List extends React.Component {
  render() {
    const { deleteAppointment, response, update } = this.props
    let appointments

    if (response.length) {
      appointments = response.map((obj, i) => {
        return (
          <Appointment
            key={i}
            index={i}
            appointment={obj}
            deleteAppointment={deleteAppointment}
            update={update}
          />
        )
      })
    }

    return (
      <div className="List container">
        <table className="table is-bordered is-striped is-hoverable has-text-centered appointments">
          <thead>
            <tr>
              <th>ID</th>
              <th>Client</th>
              <th>Date</th>
              <th>Start time</th>
              <th>End time</th>
              <th>Controls</th>
            </tr>
          </thead>
          <tbody>{response.length ? appointments : null}</tbody>
        </table>
      </div>
    )
  }
}

export default List

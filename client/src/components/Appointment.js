import React from 'react'

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
      </tr>     
    )
}

export default Appointment
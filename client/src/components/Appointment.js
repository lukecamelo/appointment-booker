import React from 'react'

const Appointment = (props) => {
    return (  
      <tr className='Appointment'>
        <th>{props.ID}</th>
        <td>{props.client}</td>
        <td>{props.date}</td>
        <td>{props.duration} minutes</td>
        <td>{props.booked_on}</td>
      </tr>     
    )
}

export default Appointment
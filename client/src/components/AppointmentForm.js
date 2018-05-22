import React from 'react'
import './AppointmentForm.css'

const AppointmentForm = (props) => {
  return (
    <div className="AppointmentForm container">
      <form className='form' action='/api/realdata' method='POST'>

        <div className="field">
          <label className="label is-one-quarter column">Name</label>
          <div className="control is-one-quarter column">
            <input type="text" placeholder='Jane Doe' name='client' className="input name-input"/>
          </div>
        </div>

        <div className="field">
          <label className="label is-one-quarter column">Duration</label>
          <div className="control is-one-quarter column">
            <div className="select">
              <select name='duration'>
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">1 hour</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label is-one-quarter column">Date</label>
          <div className="control is-one-quarter column">
            <input type="date" name='date' className="input date-input"/>
          </div>
        </div>

        <button className='button is-info' type='submit'>Add!</button>
      </form>
    </div>
  )
}

export default AppointmentForm
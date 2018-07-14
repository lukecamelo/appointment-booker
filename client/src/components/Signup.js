import React from 'react'
import './Login.css'

const Signup = () => {
  return (
    <div className="Signup container">
      <form className="form login-form card" action="/signup" method="POST">
        <div className="field">
          <label className="label">Username:</label>
          <input className="input name-input" type="text" name="username" />
          <br />
        </div>

        <div className="field">
          <label className="label">Password:</label>
          <input className="input name-input" type="password" name="password" />
        </div>

        <div className="field">
          <input className="button is-primary" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default Signup

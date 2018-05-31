import React from 'react'
import Fade from 'react-reveal/Fade'
import './Login.css'

class Login extends React.Component {

  render() {
    return (
      <Fade>
        <div className="Login container">
            <form  className='form login-form card' action="/login" method="POST">
              
              <div className='field'>
                <label className='label'>Username:</label>
                <input className='input name-input' type="text" name="username"/><br/>
              </div>

              <div className='field'>
                <label className='label'>Password:</label>
                <input className='input name-input' type="password" name="password"/>
              </div>

              <div className='field'>
                <input className='button is-primary' type="submit" value="Submit"/>
              </div>

            </form>
        </div>
      </Fade>
    )
  }
}

export default Login
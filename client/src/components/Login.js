import React from 'react'

class Login extends React.Component {
  render() {
    return (
      <div className="Login container">
        <form action="/login" method="POST">

          <div className='field is-one-quarter column'>
            <label className='label'>Username:</label>
            <input className='input' type="text" name="username"/><br/>
          </div>

          <div className='field is-one-quarter column'>
            <label className='label'>Password:</label>
            <input className='input' type="password" name="password"/>
          </div>

          <div className='field is-one-quarter column'>
            <input className='button is-primary' type="submit" value="Submit"/>
          </div>

        </form>
      </div>
    )
  }
}

export default Login
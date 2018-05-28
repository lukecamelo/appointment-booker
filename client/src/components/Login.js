import React from 'react'

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <form action="/login" method="POST">

          <div>
            <label>Username:</label>
            <input type="text" name="username"/><br/>
          </div>

          <div>
            <label>Password:</label>
            <input type="password" name="password"/>
          </div>

          <div>
            <input type="submit" value="Submit"/>
          </div>

        </form>
      </div>
    )
  }
}

export default Login
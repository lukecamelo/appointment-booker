import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './App.css';

// import Appointment from './Appointment'
import List from './List'

class App extends Component {
  state = {
    success: false,
    message: '',
    appointments: []
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({
        success: res.success,
        message: res.message,
        appointments: res.appoint
      }))
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/realdata')
    const body = await response.json()

    if (response.status !== 200) throw Error(body.message)

    return body
  }

  render() {

    const { success, message, appointments } = this.state

    if (success === true) {
      console.log(success, message, appointments)
    }

    return (
      <div className="App">
        {appointments.length > 0 ? <List response={appointments}/> : <h1 className='title'>{message}</h1>}
      </div>
    );
  
  }
}

export default App;

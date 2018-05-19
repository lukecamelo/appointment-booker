import React, { Component } from 'react';
import './App.css';

import Appointment from './Appointment'

class App extends Component {
  state = {
    response: {}
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({response: res.express}))
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/appointments')
    const body = await response.json()

    if (response.status !== 200) throw Error(body.message)

    return body
  }

  render() {

    const { response } = this.state

    return (
      <div className="App">
        <h1>{JSON.stringify(this.state.response, null, 2)}</h1>
        
        <Appointment 
        client={response.client}
        date={response.date}
        length={response.length}
        booked_on={response.booked_on} />
      </div>
    );
  }
}

export default App;

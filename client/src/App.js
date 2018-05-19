import React, { Component } from 'react';
import './App.css';

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

  showAppointment = () => {
    console.log(this.state.response.client)
  }

  render() {
    return (
      <div className="App">
        <h1>{JSON.stringify(this.state.response, null, 2)}</h1>
        <h2>Client: {this.state.response.client}</h2>
        <h3>Date booked: {this.state.response.date}</h3>
        <h3>Duration booked: {this.state.response.length}</h3>
        <h3>Scheduled on: {this.state.response.booked_on}</h3>
      </div>
    );
  }
}

export default App;

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
    console.log(this.state.response)
  }

  callApi = async () => {
    const response = await fetch('/api/appointments')
    const body = await response.json()

    if (response.status !== 200) throw Error(body.message)

    return body
  }

  render() {
    return (
      <div className="App">
        <h1>{JSON.stringify(this.state.response, null, 2)}</h1>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import './App.css';

// import Appointment from './Appointment'
import List from './List'

class App extends Component {
  state = {
    response: []
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({response: res.message}))
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/realdata')
    const body = await response.json()

    if (response.status !== 200) throw Error(body.message)

    return body
  }

  render() {

    const { response } = this.state
    console.log(response)

    return (
      <div className="App">
        <List response={response}/>
      </div>
    );
  
  }
}

export default App;

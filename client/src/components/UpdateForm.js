import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class UpdateForm extends Component {

  state = {
    id: this.props.match.params.id,
    client: 'Edit name here',
    date: 'new date',
    duration: 30,
    response: ''
  }

  componentDidMount() {
    console.log(this.props.location.state)
  }

  nameChangeHandler = (e) => {
    let client = {...this.state.client}
    client = e.target.value

    this.setState({client})
    console.log(this.state.client)
  }

  durationChangeHandler = (e) => {
    let duration = {...this.state.duration}
    duration = e.target.value

    this.setState({duration})
    console.log(this.state.duration)
  }

  dateChangeHandler = (e) => {
    let date = {...this.state.date}
    date = e.target.value

    this.setState({date})
    console.log(this.state.date)
  }

  updateAppointment = (id, client, date, duration) => {
    fetch ('/api/realdata/update', {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({id, client, date, duration})
  })
  .then((res) => {
    this.setState({response: res.status})
    console.log(this.state.response)
  })
}

  render() {

    let { id, client, date, duration } = this.state
    
    return (
      <div className='UpdateForm container'>
        <h1 className='title'>{id}</h1>
        <input 
        type="text" 
        onChange={this.nameChangeHandler} 
        value={this.state.client}/>

        <div className="select">
          <select name='duration' value={duration} onChange={this.durationChangeHandler} required>
            <option value="30">30 minutes</option>
            <option value="45">45 minutes</option>
            <option value="60">1 hour</option>
          </select>
        </div>

        <input type="date" value={date} onChange={this.dateChangeHandler}/>

        <button className='button is-primary' onClick={() => this.updateAppointment(id, client, date, duration)}>Edit</button>

        <Link to='/' className='button is-info'>Home</Link>
      </div>
    )
  }
}

export default UpdateForm
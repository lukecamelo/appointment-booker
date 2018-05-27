import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { updateAppointment } from '../helpers/helpers'

class UpdateForm extends Component {

  state = {
    id: this.props.match.params.id,
    client: 'Edit name here',
    date: 'new date',
    endTime: 30,
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

  endTimeChangeHandler = (e) => {
    let endTime = {...this.state.endTime}
    endTime = e.target.value

    this.setState({endTime})
    console.log(this.state.endTime)
  }

  dateChangeHandler = (e) => {
    let date = {...this.state.date}
    date = e.target.value

    this.setState({date})
    console.log(this.state.date)
  }

  render() {

    let { id, client, date, endTime } = this.state
    
    return (
      <div className='UpdateForm container'>
        <h1 className='title'>{id}</h1>
        <input 
        type="text" 
        onChange={this.nameChangeHandler} 
        value={client}
        required />

        <div className="select">
          <select value={endTime} onChange={this.endTimeChangeHandler} required>
            <option value="30">30 minutes</option>
            <option value="45">45 minutes</option>
            <option value="60">1 hour</option>
          </select>
        </div>

        <input 
        type="date" 
        onChange={this.dateChangeHandler}
        value={date}
        required />

        <button className='button is-primary' onClick={() => updateAppointment(id, client, date, endTime)}>Edit</button>

        <Link to='/' className='button is-info'>Home</Link>
      </div>
    )
  }
}

export default UpdateForm
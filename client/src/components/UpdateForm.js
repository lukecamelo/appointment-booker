import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class UpdateForm extends Component {

  state = {
    id: this.props.match.params.id
  }

  render() {
    return (
      <div className='UpdateForm container'>
        
        <input type="text"/>
        <Link to='/' className='button is-info'>Home</Link>
      </div>
    )
  }
}

export default UpdateForm
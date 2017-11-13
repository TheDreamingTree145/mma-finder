import React, { Component } from 'react';

class FighterForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      age: '',
      weight_class: '',
      hometown: '',
      gym_id: '',
    }
  }

  handleOnChange = (event) => {
    const { value, name } = event.target
     this.setState({
       [name]: value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/api/fighters', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fighter: {
          name: this.state.name,
          age: this.state.age,
          weight_class: this.state.weight_class,
          hometown: this.state.hometown,
          gym_id: 1
        }
      })
    })
    this.setState({
      name: '',
      age: '',
      weight_class: '',
      hometown: '',
      gym_id: '',
    })
  }

  render() {

    return (
      <div className="fightersForm">
        <h1>New Fighter Form</h1>
          <form onSubmit={this.handleOnSubmit}>

            <label>Name: </label>
            <input
              type='text'
              name="name"
              onChange={this.handleOnChange}
              value={this.state.name}
             /><br /><br />

            <label>Age: </label>
            <input
              type='number'
              name="age"
              min='18'
              max='99'
              onChange={this.handleOnChange}
              value={this.state.age}
            /><br /><br />

            <label>Weight Class </label>
            <select
              name="weight_class"
              onChange={this.handleOnChange}
              value={this.state.weight_class}>
              <option value="Flyweight">Flyweight</option>
              <option value="Bantamweight">Bantamweight</option>
              <option value="Featherweight">Featherweight</option>
              <option value="Lightweight">Lightweight</option>
              <option value="Welterweight">Welterweight</option>
              <option value="Middleweight">Middleweight</option>
              <option value="Light Heavyweight">Light Heavyweight</option>
              <option value="Heavyweight">Heavyweight</option>
            </select><br /><br />

            <label>Hometown </label>
            <input
              type="text"
              name="hometown"
              onChange={this.handleOnChange}
              value={this.state.hometown}
            /><br /><br />

            <input type="submit" value="Submit New Fighter" />
          </form>
      </div>
    )
  }
}

export default FighterForm;

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

  render() {

    return (

      <h1>New Fighter Form</h1>
    )
  }
}

export default FighterForm;

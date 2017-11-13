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
      <div className="fightersForm">
        <h1>New Fighter Form</h1>
          <form>
            <label>Name: </label>
            <input type='text' id="fighterName" /><br /><br />
            <label>Age: </label>
            <input type='number' min='18' max='99' /><br /><br />
            <label>Weight Class </label>
            <select>
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
            <input type="text" id="fighterHometown" /><br /><br />
            <input type="submit" value="Submit New Fighter" />
          </form>
      </div>
    )
  }
}

export default FighterForm;

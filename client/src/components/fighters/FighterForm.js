import React, { Component } from 'react';
import {connect} from 'react-redux';
import {postFighters} from '../../actions/fighterActions'
import * as actions from '../../actions/fighterActions'
import {bindActionCreators} from 'redux';

class FighterForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      age: '',
      weight_class: '',
      hometown: '',
      gym_id: '',
      description: '',
      picture: '', /* wtf */
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
    const {history} = this.props
    this.props.actions.postFighters(this.state)
    history.push('/fighters')
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <div className="ui form">
          <h1>Add a New Fighter</h1>
          <div className="ui one column stackable center aligned grid container">
            <div className="center aligned column twelve wide">

              <div className="eight wide field">
                <label>Name: </label>
                <input
                  type='text'
                  name="name"
                  onChange={this.handleOnChange}
                  value={this.state.name}
                 />
              </div>

              <div className="eight wide field">
                <label>Age: </label>
                <input
                  type='number'
                  name="age"
                  min='18'
                  max='99'
                  onChange={this.handleOnChange}
                  value={this.state.age}
                  />
              </div>

              <div className="eight wide field">
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
                </select>
              </div>

              <div className="eight wide field">
                <label>Hometown </label>
                <input
                  type="text"
                  name="hometown"
                  onChange={this.handleOnChange}
                  value={this.state.hometown}
                />
              </div>

              <div className="eight wide field">
                <label>Upload Picture</label>
                <input
                  type="file"
                  name="picture"
                  accept="image/*"
                  onChange={this.handleOnChange}
                  value={this.state.picture}
                />
              </div>

              <div className="eight wide field">
                <label>Description </label>
                <textarea
                  type="text"
                  name="description"
                  onChange={this.handleOnChange}
                  value={this.state.description}
                />
              </div>

              <input type="submit" value="Submit New Fighter" />
            </div>
          </div>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(FighterForm);

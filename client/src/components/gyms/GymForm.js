import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postGyms} from '../../actions/gymActions';
import * as actions from '../../actions/gymActions';

class GymForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      location: '',
      owner: '',
      description: '',
      image_url: ''
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
    this.props.actions.postGyms(this.state)
    history.push('/gyms')
  }

  render() {
    return (
      <div className="gymForm">
        <h1>New Gym Form</h1>
          <form onSubmit={this.handleOnSubmit}>
            <label>Gym Name: </label>
            <input
            type="text"
            name="name"
            onChange={this.handleOnChange}
            value={this.state.name}
            /><br /><br />

            <label>Gym Location: </label>
            <input
            type="text"
            name="location"
            onChange={this.handleOnChange}
            value={this.state.location}
            /><br /><br />

            <label>Gym Owner: </label>
            <input
            type="text"
            name="owner"
            onChange={this.handleOnChange}
            value={this.state.owner}
            /><br /><br />

            <label>Gym Description: </label>
            <textarea
            type="text"
            name="description"
            onChange={this.handleOnChange}
            value={this.state.description}
            /><br /><br />

            <label>Image URL: </label>
            <input
            type="text"
            name="image_url"
            onChange={this.handleOnChange}
            value={this.state.image_url}
            /><br /><br />

            <input type="submit" value="Submit New Gym" />
          </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(GymForm);

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
            name="gymName"
            onChange={this.handleOnChange}
            /><br /><br />

            <label>Gym Location: </label>
            <input
            type="text"
            name="gymLocation"
            onChange={this.handleOnChange}
            /><br /><br />

            <label>Gym Owner: </label>
            <input
            type="text"
            name="gymOwner"
            onChange={this.handleOnChange}
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

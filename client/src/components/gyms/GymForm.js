import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postGyms} from '../../actions/gymActions';
import * as actions from '../../actions/gymActions';

class GymForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="gymForm">
        <h1>New Gym Form</h1>
          <form>
            <label>Gym Name: </label>
            <input
            type="text"
            name="gymName"
            /><br /><br />

            <label>Gym Location: </label>
            <input
            type="text"
            name="gymLocation"
            /><br /><br />

            <label>Gym Owner: </label>
            <input
            type="text"
            name="gymOwner"
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

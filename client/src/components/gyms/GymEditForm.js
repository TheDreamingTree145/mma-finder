import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateGyms} from '../../actions/gymActions'
import * as actions from '../../actions/gymActions'

class GymEditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.gym.name,
      location: props.gym.location,
      owner: props.gym.owner,
      description: props.gym.description,
      image_url: props.gym.image_url
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
    const {history, match} = this.props
    const gymId = parseInt(match.params.gymId)
    this.props.actions.updateGyms(this.state, gymId)
    history.push('/gyms')
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <div className="ui form">
          <h1>Edit Gym</h1>
          <div className="ui one column stackable center aligned grid container">
            <div className="center aligned column twelve wide">

              <div className="fields">
                <div className="eight wide field">
                  <label>Gym Name: </label>
                  <input
                  type="text"
                  name="name"
                  onChange={this.handleOnChange}
                  value={this.state.name}
                  />
                </div>

                <div className="eight wide field">
                  <label>Gym Location: </label>
                  <input
                  type="text"
                  name="location"
                  onChange={this.handleOnChange}
                  value={this.state.location}
                  />
                </div>
              </div>

              <div className="fields">
                <div className="eight wide field">
                  <label>Gym Description: </label>
                  <textarea
                  type="text"
                  name="description"
                  onChange={this.handleOnChange}
                  value={this.state.description}
                  />
                </div>

                <div className="eight wide field">
                  <label>Gym Owner: </label>
                  <input
                  type="text"
                  name="owner"
                  onChange={this.handleOnChange}
                  value={this.state.owner}
                  />
                </div>
              </div>

              <label>Image URL: </label>
              <input
              type="text"
              name="image_url"
              onChange={this.handleOnChange}
              value={this.state.image_url}
              /><br /><br />

              <input type="submit" value="Edit Gym" />
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

export default connect(null, mapDispatchToProps)(GymEditForm);

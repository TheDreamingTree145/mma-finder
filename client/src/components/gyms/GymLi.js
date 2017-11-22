import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {voteGym} from '../../actions/gymActions';
import * as actions from '../../actions/gymActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

//are props mutable

class GymLi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vote: this.props.gym.vote
    }
  }

  handleOnClick = (event) => {
    this.setState({
      vote: this.state.vote + 1
    }, function() {
      this.props.actions.voteGym(this.state, this.props.gym.id)
    })
  }

  render() {
    const {gym} = this.props

    return (
      <div key={gym.id}>
        <ul>
          <Link style={{ marginRight: '12px' }} to={`/gyms/${gym.id}`}>{gym.name}</Link>
          <button onClick={this.handleOnClick}>Click Me</button>
          <p>{this.state.vote}</p>
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(GymLi);

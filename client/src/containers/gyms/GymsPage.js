import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import GymsList from '../../components/gyms/GymsList';

class GymsPage extends Component {
  render() {
    const { match, gyms } = this.props;
    return (
      <div>
        <Switch>
          <Route exact path={`${match.url}`} component={(props) => <GymsList {...props} gyms={gyms} />}  />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gyms: state.gyms
  }
}

export default connect(mapStateToProps)(GymsPage);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import GymsList from '../../components/gyms/GymsList';
import GymForm from '../../components/gyms/GymForm';
import GymShow from '../../components/gyms/GymShow';
import GymEdit from '../../components/gyms/GymEdit';

class GymsPage extends Component {
  render() {
    const { match, gyms } = this.props;
    return (
      <div>
        <Switch>
          <Route exact path={`${match.url}`} component={(props) => <GymsList {...props} gyms={gyms} />}  />
          <Route exact path={`${match.url}/new`} component={GymForm} />
          <Route exact path={`${match.url}/:gymId`} component={GymShow} />
          <Route exact path={`${match.url}/:gymId/edit`} component={(props) => <GymEdit {...props} gyms={gyms} />} />
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

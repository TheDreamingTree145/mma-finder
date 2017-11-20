import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import FighterForm from '../../components/fighters/FighterForm';
import FightersList from '../../components/fighters/FightersList';
import FighterShow from '../../components/fighters/FighterShow';
import FighterEdit from '../../components/fighters/FighterEdit';


class FightersPage extends Component {

  render() {
    const { match, fighters, gyms} = this.props;
    return (
      <div>
        <Switch>
          <Route exact path={`${match.url}`} component={(props) => <FightersList {...props} fighters={fighters} />}  />
          <Route exact path={`${match.url}/new`} component={(props) => <FighterForm {...props} gyms={gyms} />} />
          <Route exact path={`${match.url}/:fighterId`} component={FighterShow} />
          <Route exact path={`${match.url}/:fighterId/edit`} component={(props) => <FighterEdit {...props} fighters={fighters} gyms={gyms} />} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fighters: state.fighters,
    gyms: state.gyms
  }
}

export default connect(mapStateToProps)(FightersPage);

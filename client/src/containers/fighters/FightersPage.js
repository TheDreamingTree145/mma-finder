import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {fetchFighters} from '../../actions/fighterActions';
import * as actions from '../../actions/fighterActions.js';
import FighterForm from '../../components/fighters/FighterForm';
import FightersList from '../../components/fighters/FightersList';
import FighterShow from '../../components/fighters/FighterShow';


class FightersPage extends Component {

  componentDidMount() {
    this.props.actions.fetchFighters()
  }

  render() {
    const { match, fighters } = this.props;
    return (
      <div>
        <Switch>
          <Route exact path={`${match.url}`} component={(props) => <FightersList {...props} fighters={fighters} />}  />
          <Route exact path={`${match.url}/new`} component={FighterForm} />
          <Route path={`${match.url}/:fighterId`} component={FighterShow} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fighters: state.fighters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(FightersPage);

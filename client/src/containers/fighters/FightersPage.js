import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {fetchFighters} from '../../actions/fighterActions';
import * as actions from '../../actions/fighterActions.js';
import FighterForm from '../../components/fighters/FighterForm';


class FightersPage extends Component {


  componentDidMount() {
    this.props.actions.fetchFighters()
  }

  render() {
    const { match, fighters } = this.props;

    return (
      <div>
        {/* FightersList fighters={}} */}
        <Switch>
          <Route path={`${match.url}/new`} component={FighterForm} />
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

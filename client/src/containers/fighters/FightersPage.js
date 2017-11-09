import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as actions from '../actions/fighterActions.js'
import {fetchFighters} from '../actions/fighterActions'


class FightersPage extends Component {

  componentDidMount() {

  }

  render() {
    const { match, fighters } = this.props;

    return (
      <div>
      hhh
        <Switch>
          <Route path={`${match.url}`}  />

        </Switch>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    fighters: state.fighters
  }
}

export default connect(mapStateToProps)(FightersPage);

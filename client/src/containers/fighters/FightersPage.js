import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import {fetchFigherts} from '.../actions/fightActions'

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

export default FightersPage;

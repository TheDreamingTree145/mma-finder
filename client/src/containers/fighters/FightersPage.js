import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

class FightersPage extends Component {

  componentDidMount() {
    fetch('/api/fighters')
      .then(response => response.json())
      .then(console.log(fighters => fighters))
  }

  render() {
    const { match, fighters } = this.props;

    return (
      <div>
        <Switch>
          <Route path={`${match.url}`} />
        </Switch>
      </div>
    )
  }
}

export default FightersPage;

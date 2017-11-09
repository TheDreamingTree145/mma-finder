import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';



class FightersPage extends Component {


  componentDidMount() {

  }

  render() {
    const { match, fighters } = this.props;

    return (
      <div>
        {/* FightersList fighters={}} */}
        <Switch>

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

export default connect(mapStateToProps)(FightersPage);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import {bindActionCreators} from 'redux';

class GymsPage extends Component {
  render() {
    return (
      <h1>Hello World</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gyms: state.gyms
  }
}

export default connect(mapStateToProps)(GymsPage);

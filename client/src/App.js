import React, { Component } from 'react';
import{ BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import FightersPage from './containers/fighters/FightersPage';
import GymsPage from './containers/gyms/GymsPage';
import * as actions from './actions/index.js';
import logo from './assets/css/logo.jpg';
import './assets/css/App.css';
import { Header, } from 'semantic-ui-react';
import Navbar from './components/Navbar';

class App extends Component {



  componentDidMount() {
    this.props.actions.fetchGyms();
    this.props.actions.fetchFighters();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <Router>
            <div>
              <Navbar />
              <Route exact path="/" render={() =>
                <div>
                  <Header inverted as="h1">The largest collection of MMA fighters and gyms ever!</Header>
                    <p>Click a link to get started</p>
                </div>} />
              <Route path="/fighters" component={FightersPage} />
              <Route path="/gyms" component={GymsPage} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(App);

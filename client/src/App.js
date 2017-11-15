import React, { Component } from 'react';
import{ BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import FightersPage from './containers/fighters/FightersPage';
import GymsPage from './containers/gyms/GymsPage';
import {fetchGyms} from './actions/gymActions';
import * as actions from './actions/gymActions';
import logo from './logo.jpg';
import './App.css';



class App extends Component {

  componentDidMount() {
    this.props.actions.fetchGyms();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      <div>
      <div>
        <h2>Welcome Page</h2>
      </div>
          <Router>
            <div>
              <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
                <NavLink style={{ marginRight: '10px' }} to="/fighters">Fighter Index</NavLink>
                <NavLink style={{ marginRight: '10px' }} to="/fighters/new">Add a New Fighter</NavLink>
                <NavLink style={{ marginRight: '10px' }} to="/gyms">Gym Index</NavLink>
                <NavLink style={{ marginRight: '10px' }} to="/gyms/new">Add a Gym</NavLink>
              </div>
              <Route exact path="/" render={() =>
                <div>
                  <h3>The largest collection of MMA fighters, gyms, and fights ever!</h3>
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

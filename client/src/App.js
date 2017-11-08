import React, { Component } from 'react';
import{ BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import FightersPage from './containers/fighters/FightersPage';
import logo from './logo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <Router>
            <div>
              <Route path='/fighters' component={FightersPage} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;

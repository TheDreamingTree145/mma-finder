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
      <div>
        <h2>Welcome Page</h2>
      </div>
          <Router>
            <div>
              <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
                <NavLink style={{ marginRight: '10px' }} to="/fighters">Fighter Index</NavLink>
                <NavLink style={{ marginRight: '10px' }} to="/fighters/new">Add a New Fighter</NavLink>
              </div>
              <Route exact path="/" render={() =>
                <div>
                  <h3>The largest collection of MMA fighters, gyms, and fights ever!</h3>
                    <p>Click a link to get started</p>
                </div>} />
              <Route path="/fighters" component={FightersPage} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;

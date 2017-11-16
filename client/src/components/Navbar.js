import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/Navbar.css';

const Navbar = () => {
  return (
    <div className="nav-bar">
      <NavLink className="nav-link" to="/fighters">Fighter Index</NavLink>
      <NavLink className="nav-link" to="/fighters/new">Add a New Fighter</NavLink>
      <NavLink className="nav-link" to="/gyms">Gym Index</NavLink>
      <NavLink className="nav-link" to="/gyms/new">Add a Gym</NavLink>
    </div>
  )
}

export default Navbar;

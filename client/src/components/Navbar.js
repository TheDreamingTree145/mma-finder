import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/Navbar.css';

const Navbar = () => {
  return (
    <div className="ui fluid five item compact menu">
      <NavLink className="active item" to="/">Home</NavLink>
      <NavLink className="active item" to="/fighters">Fighter Index</NavLink>
      <NavLink className="active item" to="/fighters/new">Add a New Fighter</NavLink>
      <NavLink className="active item" to="/gyms">Gym Index</NavLink>
      <NavLink className="active item" to="/gyms/new">Add a Gym</NavLink>
    </div>
  )
}

export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink style={{ marginRight: '10px' }} to="/fighters">Fighter Index</NavLink>
      <NavLink style={{ marginRight: '10px' }} to="/fighters/new">Add a New Fighter</NavLink>
      <NavLink style={{ marginRight: '10px' }} to="/gyms">Gym Index</NavLink>
      <NavLink style={{ marginRight: '10px' }} to="/gyms/new">Add a Gym</NavLink>
    </div>
  )
}

export default Navbar;

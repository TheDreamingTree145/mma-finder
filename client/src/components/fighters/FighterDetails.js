import React from 'react';
import { Link } from 'react-router-dom';

const FighterDetails = (props) => {
  return (
    <div>
      <h1>{props.fighter.name}</h1>
      <ul>
        <p>Age: {props.fighter.age}</p>
        <p>Weight Class: {props.fighter.weight_class}</p>
        <p>Hometown: {props.fighter.hometown}</p>
        <span>Gym: <Link style={{ marginRight: '12px' }} key={props.fighter.id} to={`/gyms/${props.fighter.gym.id}`}>{props.fighter.gym.name}</Link></span>
      </ul>
    </div>
  )
}

export default FighterDetails;

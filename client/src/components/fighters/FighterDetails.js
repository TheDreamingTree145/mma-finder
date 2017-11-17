import React from 'react';
import { Link } from 'react-router-dom';

const FighterDetails = (props) => {
  return (
    <div className="ui internally celled grid container">
      <div className="row">
        <div className="four wide column">
          <h1>{props.fighter.name}</h1>
          <p>Age: {props.fighter.age}</p>
          <p>Weight Class: {props.fighter.weight_class}</p>
          <p>Hometown: {props.fighter.hometown}</p>
          <p>Gym: <Link style={{ marginBottom: '5px'}} to={`/gyms/${props.fighter.gym.id}`}>{props.fighter.gym.name}</Link></p>
        </div>
        <div className="six wide column">
          <p>{props.fighter.description}</p>
        </div>
        <div className="four wide column">
          <h2>Pending Image</h2>
        </div>
      </div>
    </div>
  )
}

export default FighterDetails;

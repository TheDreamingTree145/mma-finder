import React from 'react';

const GymDetails = (props) => {
  return (
    <div>
      <h1>{props.gym.name}</h1>
      <strong>Location: {props.gym.location}</strong><br />
      <strong>Owner: {props.gym.owner}</strong>
    </div>
  )
}

export default GymDetails;

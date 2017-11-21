import React from 'react';
import {Link} from 'react-router-dom';
import GymFightersList from './GymFightersList';

const GymDetails = (props) => {

  const WrappedLink = () => {
    return (
      <button>
        <Link style={{ marginBottom: '5px'}} to={`/gyms/${props.gym.id}/edit`}>Edit this Gym</Link>
      </button>
    )
  }

  return (
    <div className="ui internally celled grid container">
      <div className="row">
        <div className="four wide column">
          <h1>{props.gym.name}</h1>
          <strong>Location: {props.gym.location}</strong><br />
          <strong>Owner: {props.gym.owner}</strong><br />
        </div>
        <div className="six wide column">
          <p>{props.gym.description}</p>
        </div>
        <div className="four wide column">
          <img alt={props.gym.name} src={props.gym.image_url} />
        </div>
        <div>
          <WrappedLink />
        </div>
      </div>
      <div className="row">
        <div className="eight wide column">
          <h5>Fighters Who Train Here</h5>
          <GymFightersList fighters={props.fighters} gym={props.gym}/>
        </div>
      </div>
    </div>
  )
}

export default GymDetails;

import React from 'react';
import { Link} from 'react-router-dom';

const FighterDetails = ({fighter}) => {

  const WrappedLink = () => {
    return (
      <button>
        <Link style={{ marginBottom: '5px'}} to={`/fighters/${fighter.id}/edit`}>Edit this Fighter</Link>
      </button>
    )
  }

  return (
    <div className="ui internally celled grid container">
      <div className="row">
        <div className="four wide column">
          <h1>{fighter.name}</h1>
          <p>Age: {fighter.age}</p>
          <p>Weight Class: {fighter.weight_class}</p>
          <p>Hometown: {fighter.hometown}</p>
          <p>Gym: <Link style={{ marginBottom: '5px'}} to={`/gyms/${fighter.gym.id}`}>{fighter.gym.name}</Link></p>
        </div>
        <div className="six wide column">
          <p>{fighter.description}</p>
        </div>
        <div className="four wide column">
          <img src={fighter.image_url} />
        </div>
        <div>
          <WrappedLink />
        </div>
      </div>
    </div>
  )
}

export default FighterDetails;

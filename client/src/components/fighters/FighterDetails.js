import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import FighterEdit from './FighterEdit'

const FighterDetails = ({fighterActions}) => {

  debugger;
  
  const WrappedLink = () => {
    return (
      <button>
        <Link style={{ marginBottom: '5px'}} to={`/fighters/${props.fighter.id}`}>Edit this Fighter</Link>
      </button>
    )
  }

  return (
    <div className="ui internally celled grid container">
      <div className="row">
        <div className="four wide column">
          <h1>{fighter.name}</h1>
          <p>Age: {fighter.age}</p>
          <p>Weight Class: {props.fighter.weight_class}</p>
          <p>Hometown: {props.fighter.hometown}</p>
          <p>Gym: <Link style={{ marginBottom: '5px'}} to={`/gyms/${props.fighter.gym.id}`}>{props.fighter.gym.name}</Link></p>
        </div>
        <div className="six wide column">
          <p>{props.fighter.description}</p>
        </div>
        <div className="four wide column">
          <img src={props.fighter.image_url} />
        </div>
        <div>
          <WrappedLink props={props} />
        </div>
        <div>
          <Switch>
            <Route exact path={`${match.url}/:fighterId/edit`} component={(props) => <FighterEdit {...props} fighter={fighter} />}  />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default FighterDetails;

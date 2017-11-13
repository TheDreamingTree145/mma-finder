import React from 'react';
import { Link } from 'react-router-dom';

const FightersList = (props) => {
  function listFighters() {
    return props.fighters.fighters.map(fighter => {
      return (
        <div>
          <ul>
            <Link style={{ marginRight: '12px' }} key={fighter.id} to={`/fighters/${fighter.id}`}>{fighter.name}</Link>
          </ul>
        </div>
      )
    })
  }
  return (
    <div>
      {listFighters()}
    </div>
  )
}

export default FightersList;

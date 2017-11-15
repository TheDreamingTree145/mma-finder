import React from 'react';
import { Link } from 'react-router-dom';

const FightersList = (props) => {

  function listFighters() {
    return props.fighters.fighters.map(fighter => {
      return (
        <div key={fighter.id}>
          <ul>
            <Link style={{ marginRight: '12px' }} to={`/fighters/${fighter.id}`}>{fighter.name}</Link>
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

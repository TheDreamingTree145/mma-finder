import React from 'react';
import {Link} from 'react-router-dom'

const GymFightersList = (props) => {
  function listFighters() {
    const sortedFighters = props.fighters.filter(fighter => fighter.gym.id === props.gym.id)
    return sortedFighters.map(fighter => {
      return (
        <div key={fighter.id} >
          <Link style={{ marginRight: '12px' }} to={`/fighters/${fighter.id}`}>{fighter.name}</Link>
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

export default GymFightersList;

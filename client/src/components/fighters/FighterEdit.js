import React from 'react';
import FighterEditForm from './FighterEditForm'

const FighterEdit = (props) => {
  const fighter = props.fighters.fighters.find(fighter => fighter.id == props.match.params.fighterId)

  return (
    <div>
      <FighterEditForm history={props.history} match={props.match} fighter={fighter} gyms={props.gyms} />
    </div>
  )
}

export default FighterEdit;

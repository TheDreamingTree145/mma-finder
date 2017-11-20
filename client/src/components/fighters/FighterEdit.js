import React, {Component} from 'react';
import { connect } from 'react-redux';
import FighterEditForm from './FighterEditForm'

const FighterEdit = (props) => {
  const fighter = props.fighters.fighters.find(fighter => fighter.id == props.match.params.fighterId)

  return (
    <div>
      <FighterEditForm fighter={fighter} gyms={props.gyms} />
    </div>
  )
}

export default FighterEdit;

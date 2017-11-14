import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FighterDetails from './FighterDetails'

const FighterShow = ({fighter}) => {
  return (
    <div>
      <FighterDetails fighter={fighter} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const fighter = state.fighters.fighters.find(fighter => fighter.id == ownProps.match.params.fighterId)
  if (fighter) {
    return { fighter }
  } else {
    return { fighter: {} }

  }
}

export default connect(mapStateToProps)(FighterShow);

import React from 'react';
import { connect } from 'react-redux';
import GymDetails from './GymDetails';

const GymShow = ({gym, fighters}) => {
  return (
    <div>
      <GymDetails gym={gym} fighters={fighters}/>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const gym = state.gyms.gyms.find(gym => gym.id == ownProps.match.params.gymId)
  if (gym) {
    return {
      gym,
      fighters: state.fighters.fighters
    }
  } else {
    return { gym: {} }
  }
}

export default connect(mapStateToProps)(GymShow);

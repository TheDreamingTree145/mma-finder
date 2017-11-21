import React from 'react';
import GymEditForm from './GymEditForm';

const GymEdit = (props) => {
  const gym = props.gyms.gyms.find(gym => gym.id == props.match.params.gymId)

  return (
    <GymEditForm history={props.history} match={props.match} gym={gym} />
  )
}

export default GymEdit;

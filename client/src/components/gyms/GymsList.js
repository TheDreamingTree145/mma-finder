import React from 'react';
import { Link } from 'react-router-dom';

const GymsList = (props) => {
  function listGyms() {
    return props.gyms.gyms.map(gym => {
      return (
        <div key={gym.id}>
          <ul>
            <Link style={{ marginRight: '12px' }} to={`/gyms/${gym.id}`}>{gym.name}</Link>
          </ul>
        </div>
      )
    })
  }
  return (
    <div>
      {listGyms()}
    </div>
  )
}

export default GymsList;

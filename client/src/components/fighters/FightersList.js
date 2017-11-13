import React from 'react';

const FightersList = (props) => {
  function listFighters() {
    debugger;
    return props.fighters.fighters.map(fighter => {
      return (
        <div>
          <ul>
            <li>{fighter.name}</li>
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

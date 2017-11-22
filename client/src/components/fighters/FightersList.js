import React from 'react';
import { Link } from 'react-router-dom';

const FightersList = ({fighters, match}) => {

  const fighterFunction = (weightClass) => {
    return fighters.fighters.filter(fighter => {
      return fighter.weight_class === weightClass
    })
  }

  const fighterDivs = (fighter) => {
    return (
      <div key={fighter.id}>
        <ul>
          <Link style={{ marginRight: '12px' }} to={`${match.url}/${fighter.id}`}>{fighter.name}</Link>
        </ul>
      </div>
    )
  }

  const flyweight = fighterFunction("Flyweight").map(fighter => {
    return (
      fighterDivs(fighter)
    )
  })

  const bantamweight = fighterFunction("Bantamweight").map(fighter => {
    return (
      fighterDivs(fighter)
    )
  })

  const featherweight = fighterFunction("Featherweight").map(fighter => {
    return (
      fighterDivs(fighter)
    )
  })

  const lightweight = fighterFunction("Lightweight").map(fighter => {
    return (
      fighterDivs(fighter)
    )
  })

  const welterweight = fighterFunction("Welterweight").map(fighter => {
    return (
      fighterDivs(fighter)
    )
  })

  const middleweight = fighterFunction("Middleweight").map(fighter => {
    return (
      fighterDivs(fighter)
    )
  })

  const lightHeavyweight = fighterFunction("Light Heavyweight").map(fighter => {
    return (
      fighterDivs(fighter)
    )
  })

  const heavyweight = fighterFunction("Heavyweight").map(fighter => {
    return (
      fighterDivs(fighter)
    )
  })


  return (
    <div className="ui grid container">
      <div className="row">
        <div className="four wide column">
          <h5>Flyweights</h5>
          {flyweight}
        </div>
        <div className="four wide column">
          <h5>Bantamweight</h5>
          {bantamweight}
        </div>
        <div className="four wide column">
          <h5>Featherweights</h5>
          {featherweight}
        </div>
        <div className="four wide column">
          <h5>Lightweights</h5>
          {lightweight}
        </div>
    </div>
      <div className="row">
        <div className="four wide column">
          <h5>Welterweights</h5>
          {welterweight}
        </div>
        <div className="four wide column">
          <h5>Middleweights</h5>
          {middleweight}
        </div>
        <div className="four wide column">
          <h5>Light Heavyweights</h5>
          {lightHeavyweight}
        </div>
        <div className="four wide column">
          <h5>Heavyweights</h5>
          {heavyweight}
        </div>
      </div>
    </div>
  )
}

export default FightersList;

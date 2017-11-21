import React from 'react';
import { Link } from 'react-router-dom';

const FightersList = (props) => {

  const flyweight = props.fighters.fighters.filter(fighter => {
    return fighter.weight_class === "Flyweight"
  })

  const bantamweight = props.fighters.fighters.filter(fighter => {
    return fighter.weight_class === "Bantamweight"
  })

  const featherweight = props.fighters.fighters.filter(fighter => {
    return fighter.weight_class === "Featherweight"
  })

  const lightweight = props.fighters.fighters.filter(fighter => {
    return fighter.weight_class === "Lightweight"
  })

  const welterweight = props.fighters.fighters.filter(fighter => {
    return fighter.weight_class === "Welterweight"
  })

  const middleweight = props.fighters.fighters.filter(fighter => {
    return fighter.weight_class === "Middleweight"
  })

  const lightHeavyweight = props.fighters.fighters.filter(fighter => {
    return fighter.weight_class === "Light Heavyweight"
  })

  const heavyweight = props.fighters.fighters.filter(fighter => {
    return fighter.weight_class === "Heavyweight"
  })

  const flyweightMap = flyweight.map(fighter => {
    return (
      <div key={fighter.id}>
        <ul>
          <Link style={{ marginRight: '12px' }} to={`/fighters/${fighter.id}`}>{fighter.name}</Link>
        </ul>
      </div>
    )
  })

  const bantamweightMap = bantamweight.map(fighter => {
    return (
      <div key={fighter.id}>
        <ul>
          <Link style={{ marginRight: '12px' }} to={`/fighters/${fighter.id}`}>{fighter.name}</Link>
        </ul>
      </div>
    )
  })

  const featherweightMap = featherweight.map(fighter => {
    return (
      <div key={fighter.id}>
        <ul>
          <Link style={{ marginRight: '12px' }} to={`/fighters/${fighter.id}`}>{fighter.name}</Link>
        </ul>
      </div>
    )
  })

  const lightweightMap = lightweight.map(fighter => {
    return (
      <div key={fighter.id}>
        <ul>
          <Link style={{ marginRight: '12px' }} to={`/fighters/${fighter.id}`}>{fighter.name}</Link>
        </ul>
      </div>
    )
  })

  const welterweightMap = welterweight.map(fighter => {
    return (
      <div key={fighter.id}>
        <ul>
          <Link style={{ marginRight: '12px' }} to={`/fighters/${fighter.id}`}>{fighter.name}</Link>
        </ul>
      </div>
    )
  })

  const middleweightMap = middleweight.map(fighter => {
    return (
      <div key={fighter.id}>
        <ul>
          <Link style={{ marginRight: '12px' }} to={`/fighters/${fighter.id}`}>{fighter.name}</Link>
        </ul>
      </div>
    )
  })

  const lightHeavyweightMap = lightHeavyweight.map(fighter => {
    return (
      <div key={fighter.id}>
        <ul>
          <Link style={{ marginRight: '12px' }} to={`/fighters/${fighter.id}`}>{fighter.name}</Link>
        </ul>
      </div>
    )
  })

  const heavyweightMap = heavyweight.map(fighter => {
    return (
      <div key={fighter.id}>
        <ul>
          <Link style={{ marginRight: '12px' }} to={`/fighters/${fighter.id}`}>{fighter.name}</Link>
        </ul>
      </div>
    )
  })

  return (
    <div className="ui grid container">
      <div className="row">
        <div className="four wide column">
          <h5>Flyweights</h5>
          {flyweightMap}
        </div>
        <div className="four wide column">
          <h5>Bantamweight</h5>
          {bantamweightMap}
        </div>
        <div className="four wide column">
          <h5>Featherweights</h5>
          {featherweightMap}
        </div>
        <div className="four wide column">
          <h5>Lightweights</h5>
          {lightweightMap}
        </div>
    </div>
      <div className="row">
        <div className="four wide column">
          <h5>Welterweights</h5>
          {welterweightMap}
        </div>
        <div className="four wide column">
          <h5>Middleweights</h5>
          {middleweightMap}
        </div>
        <div className="four wide column">
          <h5>Light Heavyweights</h5>
          {lightHeavyweightMap}
        </div>
        <div className="four wide column">
          <h5>Heavyweights</h5>
          {heavyweightMap}
        </div>
      </div>
    </div>
  )
}

export default FightersList;

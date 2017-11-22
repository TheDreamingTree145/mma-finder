import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import GymLi from './GymLi';

class GymsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let self = this;

    function listGyms() {
      return self.props.gyms.gyms.sort(function(a, b) {
        return b.vote - a.vote;
      }).map(gym => {
        return <GymLi gym={gym} />
      })
    }
    return (
      <div>
        {listGyms()}
      </div>
    )
  }
}

export default GymsList;

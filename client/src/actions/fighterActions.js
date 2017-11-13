import fetch from 'isomorphic-fetch';

export function fetchFighters() {
  return function(dispatch) {
    dispatch({type: 'LOADING_FIGHTERS'})
    return fetch('http://localhost:3001/api/fighters')
      .then(response => {
        return response.json();
      }).then(responseJson => {
        dispatch({type: 'FETCH_FIGHTERS', payload: responseJson})
    })
  }
}

export function postFighters() {
  fetch('http://localhost:3001/api/fighters', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fighter: {
        name: this.state.name,
        age: this.state.age,
        weight_class: this.state.weight_class,
        hometown: this.state.hometown,
        gym_id: 1
      }
    })
  })
}

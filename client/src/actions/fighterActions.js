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

export function postFighters(state) {
  return function(dispatch) {
    dispatch({type: 'LOADING_FIGHTERS'})
    return fetch('http://localhost:3001/api/fighters', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fighter: {
          name: state.name,
          age: state.age,
          weight_class: state.weight_class,
          hometown: state.hometown,
          gym_id: 1
        }
      })
    }).then(response => console.log(response.url, response))
  }
}

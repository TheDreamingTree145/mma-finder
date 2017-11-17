import fetch from 'isomorphic-fetch';

export function fetchGyms() {
  return function(dispatch) {
    dispatch({type: 'LOADING_GYMS'})
    return fetch('http://localhost:3001/api/gyms')
      .then(response => {
        return response.json();
      }).then(responseJson => {
        dispatch({type: 'FETCH_GYMS', payload: responseJson})
    }).catch(e => {
      console.log(e)
    })
  }
}

export function postGyms(state) {
  return function(dispatch) {
    dispatch({type: 'LOADING_GYMS'})
    return fetch('http://localhost:3001/api/gyms', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        gym: {
          name: state.name,
          location: state.location,
          owner: state.owner,
          description: state.description
        }
      })
    }).then(response  => {
      return response.json()
    }).then(responseJson => {
      dispatch({type: 'ADD_GYM', payload: responseJson})
    })
  }
}

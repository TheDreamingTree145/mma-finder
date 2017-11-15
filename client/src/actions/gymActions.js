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

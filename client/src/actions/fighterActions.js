import fetch from 'isomorphic-fetch';

export function fetchFighters() {
  return function(dispatch) {
    dispatch({type: 'LOADING_FIGHTERS'})
    return fetch('http://localhost:3001/api/fighters')
      .then(response => {
        return response.json();
      }).then(responseJson => {
        dispatch({type: 'FETCH_FIGHTERS', payload: responseJson.fighters})
    })
  }
}

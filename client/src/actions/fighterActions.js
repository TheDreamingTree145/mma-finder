import fetch from 'isomorphic-fetch';

export function fetchFighters() {
  return function(dispatch) {
    dispatch()
    return fetch('/api/fighters')
      .then(response => response.json())
      .then(fighters => console.log(fighters))
  }
}

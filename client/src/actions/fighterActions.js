export function fetchFighters() {
  return function(dispatch) {
    dispatch({type: 'LOADING_FIGHTERS'})
    return fetch('/api/fighters')
      .then(response => {
        response.json()
      }).then(fighters => {
        dispatch({type: 'FETCH_FIGHTERS', payload: fighters})
    })
  }
}

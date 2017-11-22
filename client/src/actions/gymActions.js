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
          description: state.description,
          image_url: state.image_url,
          vote: state.vote
        }
      })
    }).then(response  => {
      return response.json()
    }).then(responseJson => {
      dispatch({type: 'ADD_GYM', payload: responseJson})
    })
  }
}

export function updateGyms(state, gymId) {
  return function(dispatch) {
    dispatch({type: 'LOADING_GYMS'})
    return fetch(`http://localhost:3001/api/gyms/${gymId}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        gym: {
          name: state.name,
          location: state.location,
          owner: state.owner,
          image_url: state.image_url,
          description: state.description,
        }
      })
    }).then(response  => {
      return response.json()
    }).then(responseJson => {
      dispatch({type: 'UPDATE_GYM', payload: responseJson})
    }).catch(e => {
      console.log(e)
    })
  }
}

export function voteGym(state, gymId) {
  return function(dispatch) {
    dispatch({type: 'LOADING_GYMS'})
    return fetch(`http://localhost:3001/api/gyms/${gymId}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        gym: {
          vote: state.vote
        }
      })
    }).then(response  => {
      return response.json()
    }).then(responseJson => {
      dispatch({type: 'VOTE_GYM', payload: responseJson})
    }).catch(e => {
      console.log(e)
    })
  }
}

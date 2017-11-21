import fetch from 'isomorphic-fetch';

export function fetchFighters() {
  return function(dispatch) {
    dispatch({type: 'LOADING_FIGHTERS'})
    return fetch('http://localhost:3001/api/fighters')
      .then(response => {
        return response.json();
      }).then(responseJson => {
        dispatch({type: 'FETCH_FIGHTERS', payload: responseJson})
    }).catch(e => {
      console.log(e)
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
          gym_id: state.gym_id,
          description: state.description,
          image_url: state.image_url
        }
      })
    }).then(response  => {
      return response.json()
    }).then(responseJson => {
      dispatch({type: 'ADD_FIGHTER', payload: responseJson})
    }).catch(e => {
      console.log(e)
    })
  }
}

export function updateFighters(state, fighterId) {
  return function(dispatch) {
    dispatch({type: 'LOADING_FIGHTERS'})
    return fetch(`http://localhost:3001/api/fighters/${fighterId}`, {
      method: 'PATCH',
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
          gym_id: state.gym_id,
          description: state.description,
          image_url: state.image_url
        }
      })
    }).then(response  => {
      return response.json()
    }).then(responseJson => {
      dispatch({type: 'UPDATE_FIGHTER', payload: responseJson})
    }).catch(e => {
      console.log(e)
    })
  }
}

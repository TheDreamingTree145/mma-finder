export default function gymsReducer(state = {loading: false, gyms: []}, action) {
  switch (action.type) {
    case 'FETCH_GYMS':
      return {loading: false, gyms: action.payload}
    case 'LOADING_GYMS':
      return Object.assign({}, state, {loading: true})
    default:
      return state
  }
};

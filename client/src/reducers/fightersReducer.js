export default function fightersReducer(state = {loading: false, fighters: []}, action) {
  switch (action.type) {
    case 'FETCH_FIGHTERS':
      return {loading: false, fighters: action.payload.fighters}
    case 'LOADING_FIGHTERS':
      return Object.assign({}, state, {loading: true})
    case 'ADD_FIGHTER':
      return Object.assign({}, state, state.fighters.concat(action.payload))
    default:
      return state
  }
};

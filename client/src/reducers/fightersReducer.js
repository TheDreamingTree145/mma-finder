export default function fightersReducer(state = {
  loading: false, fighters: []
}, action) {
  switch (action.type) {
    case 'FETCH_FIGHTERS':
      return {loading: false, fighters: action.payload}
    case 'LOADING_FIGHTERS':
      return Object.assign({}, state, {loading: true})
    default:
      return state
  }
};

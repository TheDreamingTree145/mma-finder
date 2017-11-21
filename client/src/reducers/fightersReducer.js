export default function fightersReducer(state = {loading: false, fighters: []}, action) {
  switch (action.type) {
    case 'FETCH_FIGHTERS':
      return { loading: false, fighters: action.payload.fighters }
    case 'LOADING_FIGHTERS':
      return Object.assign({}, state, {loading: true})
    case 'ADD_FIGHTER':
      return { fighters: state.fighters.concat(action.payload.fighter) };
    case 'UPDATE_FIGHTER':
      const fighter = action.payload.fighter
      return { fighters: state.fighters.filter(fighter => fighter.id !== action.payload.fighter.id).concat(fighter)}
    default:
      return state
  }
};

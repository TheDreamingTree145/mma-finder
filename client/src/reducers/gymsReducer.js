export default function gymsReducer(state = {loading: false, gyms: []}, action) {
  switch (action.type) {
    case 'FETCH_GYMS':
      return {loading: false, gyms: action.payload.gyms}
    case 'LOADING_GYMS':
      return Object.assign({}, state, {loading: true})
    case 'ADD_GYM':
      return {gyms: state.gyms.concat(action.payload.gym)}
    case 'UPDATE_GYM':
      const gym = action.payload.gym
      return {gyms: state.gyms.filter(gym => gym.id !== action.payload.gym.id).concat(gym)}
    case 'VOTE_GYM':
      const votedGym = action.payload.gym
      return {gyms: state.gyms.filter(gym => gym.id !== action.payload.gym.id).concat(votedGym)}
    default:
      return state
  }
};

import { combineReducers } from 'redux';
import fightersReducer from './fightersReducer';
import gymsReducer from './gymsReducer';

/* Global State = {fighters: {fighters: [], loading: } , gyms: {gyms: []}} */
const rootReducer = combineReducers({
  fighters: fightersReducer,
  gyms: gymsReducer
})

export default rootReducer;
